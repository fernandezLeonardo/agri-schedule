import { NextRequest, NextResponse } from "next/server";
import { InitiateAuthCommand } from "@aws-sdk/client-cognito-identity-provider";
import { cognitoClient } from "@/lib/cognito";

export async function POST(req: NextRequest){
  try{
    const refreshToken = req.cookies.get('refresh_token')?.value;
    if (!refreshToken) return NextResponse.json({ message: 'No refresh token' }, { status: 401 });

    const command = new InitiateAuthCommand({
      AuthFlow: 'REFRESH_TOKEN_AUTH',
      AuthParameters: { REFRESH_TOKEN: refreshToken },
      ClientId: process.env.CLIENT_ID,
    });

    const result = await cognitoClient.send(command);
    const tokens = result.AuthenticationResult;

    const res = NextResponse.json({ message: 'Token refreshed' });
    if (tokens?.AccessToken) {
      res.cookies.set({ name: 'access_token', value: tokens.AccessToken, httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', path: '/', maxAge: tokens.ExpiresIn ?? 3600 });
    }
    if (tokens?.IdToken) {
      res.cookies.set({ name: 'id_token', value: tokens.IdToken, httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', path: '/', maxAge: tokens.ExpiresIn ?? 3600 });
    }

    return res;
  } catch (err: any) {
    return NextResponse.json({ message: 'Failed to refresh', error: String(err) }, { status: 401 });
  }
}

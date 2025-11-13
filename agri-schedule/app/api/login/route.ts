import { PrismaClient } from "@/lib/generated/prisma";
import { NextRequest, NextResponse } from "next/server";
import { InitiateAuthCommand } from "@aws-sdk/client-cognito-identity-provider";
import { cognitoClient } from "@/lib/cognito";

const prisma = new PrismaClient();

export async function POST(req: NextRequest){
    const body = await req.json();
    const email = body.email;
    const password = body.password;

    // use Cognito
    const command = new InitiateAuthCommand({
        AuthFlow: "USER_PASSWORD_AUTH",
        AuthParameters: {
            USERNAME: email,
            PASSWORD: password,
        },
        ClientId: process.env.CLIENT_ID,
    });

    try{
        const login = await cognitoClient.send(command);
        const tokens = login.AuthenticationResult;

        const user = await prisma.user.findUnique({
            where: { email: email }
        });

        let msg = user?.role === "VOLUNTEER" ? "Welcome Volunteer!" : "Welcome Admin!";

        // Prepare response and set secure httpOnly cookies for tokens
        const res = NextResponse.json({ message: msg });

        if (tokens?.AccessToken) {
            res.cookies.set({
                name: 'access_token',
                value: tokens.AccessToken,
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                path: '/',
                maxAge: tokens.ExpiresIn ?? 3600,
            });
        }
        if (tokens?.RefreshToken) {
            // refresh token lifetime: keep longer (example 30 days)
            res.cookies.set({
                name: 'refresh_token',
                value: tokens.RefreshToken,
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                path: '/',
                maxAge: 60 * 60 * 24 * 30,
            });
        }
        if (tokens?.IdToken) {
            res.cookies.set({
                name: 'id_token',
                value: tokens.IdToken,
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                path: '/',
                maxAge: tokens.ExpiresIn ?? 3600,
            });
        }

        return res;
    } catch (error: any){
        return NextResponse.json({message: error.message}, { status: 500 });
    }
}

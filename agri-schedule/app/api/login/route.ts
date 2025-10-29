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

    const login = await cognitoClient.send(command);
    const tokens = login.AuthenticationResult;
    return NextResponse.json(tokens);
}

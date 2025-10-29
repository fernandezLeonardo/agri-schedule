import { PrismaClient } from "@/lib/generated/prisma";
import { NextRequest, NextResponse } from "next/server";
import { InitiateAuthCommand } from "@aws-sdk/client-cognito-identity-provider";
import { cognitoClient } from "@/lib/cognito";
import { matchesGlob } from "path";

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
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        }
    })
    let msg;
    if (user?.role === "VOLUNTEER"){
        msg = "Welcome Volunteer!"
    } else {
        msg = "Welcome Admin!"
    }
    return NextResponse.json({message:  msg, tokens});
}

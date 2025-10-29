import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";
import { SignUpCommand } from "@aws-sdk/client-cognito-identity-provider";
import { cognitoClient } from "@/lib/cognito";

const prisma = new PrismaClient();

export async function POST(req: NextRequest){
    const body = await req.json();
    const email = body.email
    const password = body.password

    // use Cognito
    const command = new SignUpCommand({
        ClientId: process.env.CLIENT_ID,
        Username: email,
        Password: password,
        UserAttributes: [{ Name: "email", Value: email}]
    });

    try{
        const register = await cognitoClient.send(command);
        if (!register.UserSub) {throw new Error("No CognitoID returned. Error 500.")}
        await prisma.user.create({
            data: { 
                id: register.UserSub,
                email: email,
                password: password, 
            },

        })
    } catch (error: any){
        return NextResponse.json({message: error.message})
    }
    return NextResponse.json({message: "Registration successful!"})
}

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";
import { SignUpCommand  } from "@aws-sdk/client-cognito-identity-provider";
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
        await cognitoClient.send(command);
    } catch (error: any){
        return NextResponse.json({message: error.message})
    }
    return NextResponse.json({message: "Registration successful!"})
}

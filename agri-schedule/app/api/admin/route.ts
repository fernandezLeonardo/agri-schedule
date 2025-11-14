import { CognitoJwtVerifier } from "aws-jwt-verify";
import { PrismaClient } from "@/lib/generated/prisma";
import { NextRequest, NextResponse } from "next/server";
import { CreateEventForm } from "@/components/forms/create-event-form";


const prisma = new PrismaClient;

const verifier = CognitoJwtVerifier.create({
    userPoolId: process.env.USER_POOL_ID!,
    tokenUse: "access",
    clientId: process.env.CLIENT_ID!,
});

export async function POST(req: NextRequest){
    const accessToken = req.headers.get("Authorization");
    if (!accessToken) {return NextResponse.json("No token received.")}

    const verified = await verifier.verify(accessToken)
    const cognitoId = verified.sub

    // do databse stuff with this id

    return NextResponse.json("Success.")
}
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

export async function POST(req: NextRequest){
    const body = await req.json();
    const email = body.email
    const password = body.password
    //database 
    const User = await prisma.user.create({
        data: {
            email,
            password,
        } 
    });
    
    console.log(email, password);
    return NextResponse.json({message: "Registration successful!"})
}

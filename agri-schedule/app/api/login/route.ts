import { PrismaClient } from "@/lib/generated/prisma";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest){
    const body = await req.json();
    const email = body.email;
    const password = body.password;

    // check database for user w email
    const user = await prisma.user.findUnique({
        where: {email},
    });
    if (!user){ return NextResponse.json({error: "User not found"}) }
    //get password for that email
    const db_pass = user.password
    //check that password with one received
    const pass_match = (db_pass == password);
    if (!pass_match) { return NextResponse.json({error:"Invalid password"}) }
    //also check if they are admin or volunteer and change response msg accordingly
    if (user.role == "VOLUNTEER")
        return NextResponse.json({message: "Welcome Volunteer!"})
    else
        return NextResponse.json({message: "Welcome Admin!"})
}

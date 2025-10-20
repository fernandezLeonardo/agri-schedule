import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    const body = await req.json();
    //database or something
    
    console.log(body.email, body.password);
    return NextResponse.json({message: "Registration successful!"})
}

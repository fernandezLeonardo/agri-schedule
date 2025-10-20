import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    const body = await req.json();
    //database or something
    console.log(body.email, body.password);
    const email = body.email;
    const password = body.password;

    // check database for email
    //get password for that email
    //check that password with one received
    //also check if they are admin or volunteer and change response msg accordingly
    return NextResponse.json({message: "Welcome!"})
}

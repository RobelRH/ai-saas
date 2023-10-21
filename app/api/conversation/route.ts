import OpenAI from 'openai';
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server"

const configuration = {
    apiKey: process.env.OPENAI_API_KEY
}

const openai = new OpenAI(configuration);

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { messages } = body;

        if(!configuration) {
            return new NextResponse("Unauthorized", { status: 401 })
        }
        
        if(!userId) {
            return new NextResponse("OpenAI key not configured", {status: 500})
        }

        if(!messages) {
            return new NextResponse("Messages are required", {status: 400})
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages
        })

        return NextResponse.json(response.choices[0].message.content)


    } catch (error) {
        console.log("[Conversation_Error]", error)
        return new NextResponse("internal error", {status: 500})
    }
}
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");

export async function POST(request: Request) {
    try {
        const { prompt } = await request.json();
        
        if (!prompt) {
            return NextResponse.json(
                { error: "Prompt is required" },
                { status: 400 }
            );
        }

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-8B" });
        const result = await model.generateContent(prompt);
        const response = await result.response.text();

        return NextResponse.json({ response });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to generate content" },
            { status: 500 }
        );
    }
}
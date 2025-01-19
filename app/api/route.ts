import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { prompt } = await request.json();
        console.log('Received prompt:', prompt);
        
        if (!prompt) {
            return NextResponse.json(
                { error: "Prompt is required" },
                { status: 400 }
            );
        }

        const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        
        try {
            const result = await model.generateContent(prompt);
            const response = await result.response.text();
            console.log('Generated response:', response);

            return NextResponse.json({ 
             response,
             status: 200
            });
        } catch (generationError) {
            console.error('Gemini API Generation Error:', generationError);
            return NextResponse.json(
                { error: "Failed to generate content", details: String(generationError) },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error('API Route Error:', error);
        return NextResponse.json(
            { error: "Failed to process request", details: String(error) },
            { status: 500 }
        );
    }
}
import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { NextResponse } from 'next/server';
 
// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
 
// Set the runtime to edge for best performance
export const runtime = 'edge';
 
export async function POST(req: Request) {
  try {

    const prompt = "Create a simple landing page for a fictional startup called ‘TechNest.’ The landing page should include the following sections: Header: A navigation menu with links to ‘Home,’ ‘About,’ ‘Services,’ and ‘Contact.’ Hero Section: A large banner with a headline like ‘Welcome to TechNest’ and a brief description. About Us: A section describing the company’s mission, vision, and values. Services: Highlight three services offered by TechNest (e.g., Web Development, Cloud Solutions, Mobile Apps). Contact: Include a contact form with fields for name, email, and message. Feel free to get creative with the design and layout! Use any colors, fonts, or images that you think would suit the TechNest brand."
    const { messages } = await req.json();
   
    // Ask OpenAI for a streaming chat completion given the prompt
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo-instruct',
      max_tokens: 400,
      stream: true,
      prompt,
    });
   
    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);
    // Respond with the stream
    return new StreamingTextResponse(stream);
  } catch (error) {
    if(error instanceof OpenAI.APIError){
        const {name,status,headers, message} = error

        return NextResponse.json({
            name, status, headers, message
        },{
            status
        })
    }else{
        console.error("An unexpected error occured ",error);
        throw error 
    }
  }
}
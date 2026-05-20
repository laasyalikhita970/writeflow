import Groq from "groq-sdk";
import { supabase } from "@/app/lib/supabase";
import { auth } from "@clerk/nextjs/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {

  try {
    const { userId } = await auth();

if (!userId) {

  return Response.json({
    content: "Unauthorized",
  });

}

    const { prompt } = await req.json();

    const chatCompletion =
      await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      model: "llama-3.3-70b-versatile",
      });

    const response =
      chatCompletion.choices[0]?.message?.content || "";

    // Save to Supabase
    if (response) {

      await supabase
        .from("history")
        .insert([
          {
            user_id: userId,
            prompt,
            response,
          },
        ]);

    }

    return Response.json({
      content: response,
    });

  } catch (error) {

    console.log(error);

    return Response.json({
      content: "Something went wrong.",
    });

  }

}
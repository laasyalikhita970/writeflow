import { auth } from "@clerk/nextjs/server";
import { supabase } from "@/app/lib/supabase";

export async function GET() {

  try {

    const { userId } = await auth();

    if (!userId) {

      return Response.json([]);

    }

    const { data, error } = await supabase
      .from("history")
      .select("*")
      .eq("user_id", userId)
      .order("id", { ascending: false });

    if (error) {

      console.log(error);

      return Response.json([]);

    }

    return Response.json(data);

  } catch (error) {

    console.log(error);

    return Response.json([]);

  }

}
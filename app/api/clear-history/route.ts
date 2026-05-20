import { auth } from "@clerk/nextjs/server";
import { supabase } from "@/app/lib/supabase";

export async function DELETE() {

  try {

    const { userId } = await auth();

    if (!userId) {

      return Response.json({
        success: false,
      });

    }

    const { error } = await supabase
      .from("history")
      .delete()
      .eq("user_id", userId);

    if (error) {

      console.log(error);

      return Response.json({
        success: false,
      });

    }

    return Response.json({
      success: true,
    });

  } catch (error) {

    console.log(error);

    return Response.json({
      success: false,
    });

  }

}
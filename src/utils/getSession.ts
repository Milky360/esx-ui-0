import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function getSession() {
  try {
    const session = await getServerSession(authOptions);
    return session as any;
  } catch (error) {
    console.error("Error fetching session:", error);
    return null;
  }
}

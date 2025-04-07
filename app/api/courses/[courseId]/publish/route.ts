import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
    { params }: { params: { courseId: string } }
) {
    try {
        const  { userId } = auth();

        if (!userId) {
            return new NextResponse("Unautorized", { status: 401 })
        }

        const course = await db.course.findUnique
    } catch (error) {
        console.log("[COURSE_ID_PUBLIISH]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
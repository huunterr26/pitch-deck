import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
    try {
        const { email, source } = await request.json();

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, error: "Invalid email address" },
                { status: 400 }
            );
        }

        // Get Supabase client (lazy-initialized)
        const supabase = getSupabase();

        // Check if Supabase is configured
        if (!supabase) {
            // Development mode - just log the email
            console.log(`[Waitlist] Email submitted (dev mode): ${email}`);
            return NextResponse.json({
                success: true,
                message: "You're on the list! We'll notify you when we launch.",
                dev: true,
            });
        }

        // Insert into Supabase
        const { error } = await supabase
            .from("waitlist")
            .insert([{ email: email.toLowerCase().trim(), source: source || "landing" }]);

        if (error) {
            // Handle duplicate email
            if (error.code === "23505") {
                return NextResponse.json({
                    success: true,
                    message: "You're already on the list! We'll be in touch soon.",
                });
            }

            console.error("[Waitlist] Supabase error:", error);
            return NextResponse.json(
                { success: false, error: "Failed to join waitlist" },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "You're on the list! We'll notify you when we launch.",
        });
    } catch (error) {
        console.error("[Waitlist] Error:", error);
        return NextResponse.json(
            { success: false, error: "An unexpected error occurred" },
            { status: 500 }
        );
    }
}

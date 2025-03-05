import db from "../../config/db.js";  // Adjust path based on your folder structure

export async function GET() {
    return new Response("Database connection test completed!", {
        status: 200,
    });
}

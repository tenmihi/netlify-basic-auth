import { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
    const auth = req.headers.get("authorization");
    const password = Netlify.env.get("password");
    const valid = Buffer.from(`username:${password}`).toString("base64");

    if (auth !== `Basic ${valid}`) {
        return new Response("Unauthorized", {
            status: 401,
            headers: { "WWW-Authenticate": "Basic" },
        })
    }
    return new Response("Welcome!", { status: 200 });
};
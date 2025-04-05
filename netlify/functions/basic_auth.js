exports.handler = async (event) => {
    const auth = event.headers.authorization;
    const password = process.env.password;
    const valid = Buffer.from(`username:${password}`).toString("base64");

    if (auth !== `Basic ${valid}`) {
        return {
            statusCode: 401,
            headers: { "WWW-Authenticate": "Basic" },
            body: "Unauthorized",
        };
    }
    return { statusCode: 200 };
};
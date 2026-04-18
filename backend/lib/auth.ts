import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
// import * as authSchema from "./schema";

export const auth = betterAuth({
    database: drizzleAdapter({}, {
        provider: 'pg',
        // schema: authSchema,
        }),
        user: {
        additionalFields: {
            profile: {
                type: "string",
                required: true,
                defaultValue: "buyer",  
                input: false // Set to true if users can set their own role on sign-up
                },
            },
        },
        emailAndPassword: {
        enabled: true,
        },
        trustedOrigins: [
        'http://localhost:5173'
        ]
})
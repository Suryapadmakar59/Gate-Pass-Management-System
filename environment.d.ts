import { Secret } from "jsonwebtoken";

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            TOKEN_KEY: Secret;
            FRONTEND_URL: string;
            MONGODB_URL: string;
            SQL_URL: string;
            PORT: string;
        }
    }
}

export { }

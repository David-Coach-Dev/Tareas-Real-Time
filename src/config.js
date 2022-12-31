import { config } from 'dotenv';
config();
export const MONGODB_URI = process.env.MONGODB_URI_ATLAS || process.env.MONGODB_URI_LOCAL;
export const PORT = process.env.PORT || 3000;
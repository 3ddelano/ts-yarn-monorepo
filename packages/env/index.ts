import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    DISCORD_BOT_TOKEN: z.string(),
  },
  client: {},
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    DISCORD_BOT_TOKEN: process.env.DISCORD_BOT_TOKEN,
  },
});

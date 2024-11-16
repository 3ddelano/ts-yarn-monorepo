import { command } from "@repo/core/commands/about";
import { env } from "@repo/env";
import { client } from "./infra/discord";

// client.login(env.DISCORD_BOT_TOKEN).then((arg) => {
//   console.log("Logged in", arg);
// });

console.log("command", command.options);

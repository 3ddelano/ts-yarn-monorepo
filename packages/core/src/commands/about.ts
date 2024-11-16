import { makeCommand } from ".";
import { CommandCategory } from "./types";

export const command = makeCommand({
  options: {
    name: "about",
    category: CommandCategory.Info,
    description: "Know a little bit about me.",
    cooldown: 5,
  },
  execute: async ({ ctx }) => {
    ctx.logger.info("Running about command!");
  },
});

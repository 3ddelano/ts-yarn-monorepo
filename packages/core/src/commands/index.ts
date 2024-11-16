import type { ApplicationContext } from "../types";
import type { CommandOptions } from "./types";

export const makeCommand = ({
  options,
  execute,
}: {
  options: CommandOptions;
  execute: ({ ctx }: { ctx: ApplicationContext }) => Promise<void>;
}) => {
  return {
    options,
    execute,
  };
};

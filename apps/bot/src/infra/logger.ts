import type { Logger } from "@repo/core/types";
import { createLogger, format, transports } from "winston";

export const winstonLogger = createLogger({
  level: "info",
  format: format.combine(format.timestamp(), format.prettyPrint()),
  transports: [new transports.Console()],
});

export const logger: Logger = {
  info: (...args: any[]) => {
    winstonLogger.info(args);
  },
};

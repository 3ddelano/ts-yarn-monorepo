export type Logger = {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  info: (...args: any[]) => void;
};

export type ApplicationContext = {
  logger: Logger;
};

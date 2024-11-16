export enum CommandCategory {
  Info = "info",
  Fun = "fun",
}

export enum SlashCommandArgType {
  String = "string",
  User = "user",
  Channel = "channel",
  Role = "role",
  Boolean = "boolean",
}

export type CommandOptions = {
  name: string;
  category: CommandCategory;
  description: string;
  aliases?: string[]; // default []
  cooldown?: number; // default 1
  textCommand?: {
    enabled?: boolean; // default true
    usage?: (withPrefix: (cmd: string) => string) => string[]; // default prefix!name
    minArgCount?: number; // default 0
  };
  slashCommand?: {
    enabled?: boolean; // default true
    args?: {
      name: string;
      description: string;
      type: SlashCommandArgType;
      required?: boolean; // default false
      choices?: {
        name: string;
        value: string;
      }[];
    }[];
  };
};

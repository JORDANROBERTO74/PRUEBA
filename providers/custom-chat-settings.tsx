export type CustomChatModelId =
  | "gpt-3.5-turbo"
  | "gpt-4o"
  | "davinci-codex"
  | "text-davinci-002"
  | "text-davinci-003";

export interface CustomChatSettings {
  max_tokens?: number;
}

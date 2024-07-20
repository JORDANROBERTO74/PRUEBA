import { CustomChatSettings } from "./custom-chat-settings";

export class CustomChatLanguageModel {
  modelId: string;
  settings: CustomChatSettings;
  provider: string;
  baseURL: string;
  headers: () => Record<string, string>;
  generateId: () => string;

  constructor(modelId: string, settings: CustomChatSettings, config: any) {
    this.modelId = modelId;
    this.settings = settings;
    this.provider = config.provider;
    this.baseURL = config.baseURL;
    this.headers = config.headers;
    this.generateId = config.generateId;
  }

  async generateCompletion(prompt: string) {
    const response = await fetch(`${this.baseURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...this.headers(),
      },
      body: JSON.stringify({
        model: this.modelId,
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate completion");
    }

    return response.json();
  }
}

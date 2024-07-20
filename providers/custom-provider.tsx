import {
  generateId,
  loadApiKey,
  withoutTrailingSlash,
} from "@ai-sdk/provider-utils";
import { CustomChatLanguageModel } from "./custom-chat-language-model";
import { CustomChatModelId, CustomChatSettings } from "./custom-chat-settings";

export interface CustomProvider {
  (
    modelId: CustomChatModelId,
    settings?: CustomChatSettings
  ): CustomChatLanguageModel;

  chat(
    modelId: CustomChatModelId,
    settings?: CustomChatSettings
  ): CustomChatLanguageModel;
}

export interface CustomProviderSettings {
  baseURL?: string;
  apiKey?: string;
  headers?: Record<string, string>;
  generateId?: () => string;
}

export function createCustomProvider(
  options: CustomProviderSettings = {}
): CustomProvider {
  const createModel = (
    modelId: CustomChatModelId,
    settings: CustomChatSettings = {}
  ) =>
    new CustomChatLanguageModel(modelId, settings, {
      provider: "custom.chat",
      baseURL:
        withoutTrailingSlash(options.baseURL) ??
        process.env.NEXT_PUBLIC_API_BASE,
      headers: () => ({
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      }),
      generateId: options.generateId ?? generateId,
    });

  const provider = function (
    modelId: CustomChatModelId,
    settings?: CustomChatSettings
  ) {
    if (new.target) {
      throw new Error(
        "The model factory function cannot be called with the new keyword."
      );
    }

    return createModel(modelId, settings);
  };

  provider.chat = createModel;

  return provider as CustomProvider;
}

export const customProvider = createCustomProvider();

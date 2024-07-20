"use client";

import React from "react";
import { customProvider } from "../../providers/custom-provider";

export default function Home() {
  const [inputText, setInputText] = React.useState("");
  const [completionResult, setCompletionResult] = React.useState(null);

  const handleGenerate = async () => {
    const model = customProvider("gpt-4o");
    try {
      const result = await model.generateCompletion(inputText);
      setCompletionResult(result);
    } catch (error) {
      console.error("Error generating completion:", error);
    }
  };

  console.log(completionResult);

  return (
    <div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col justify-center items-center gap-3 pt-8">
          <h1>Generate Text with OpenAI</h1>
          <div>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter prompt"
            />
          </div>
          <div>
            <button className="bg-blue-300 p-2" onClick={handleGenerate}>
              Generate
            </button>
          </div>
        </div>
        {completionResult && (
          <pre>{JSON.stringify(completionResult, null, 2)}</pre>
        )}
      </div>
    </div>
  );
}

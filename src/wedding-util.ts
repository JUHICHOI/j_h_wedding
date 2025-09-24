// src/hooks/useCopyToClipboard.js

import { useState, useEffect } from "react";

export function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  const copy = (text: string) => {
    if (typeof text !== "string" || !text) {
      console.error("Cannot copy non-string or empty text.");
      return;
    }

    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
      })
      .catch((err) => {
        console.error("Failed to copy text:", err);
        alert("Failed to copy text.");
      });
  };

  return [isCopied, copy] as const;
}

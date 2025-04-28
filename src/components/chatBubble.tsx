"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ChatBubbleProps = {
  sender: "user" | "bot";
  content: string;
  options?: string[];
  onOptionClick?: (option: string) => void;
};

export const ChatBubble = ({ sender, content, options, onOptionClick }: ChatBubbleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "max-w-[70%] px-4 py-3 rounded-2xl text-sm",
        sender === "user" ? "bg-blue-600 text-white ml-auto" : "bg-gray-100 text-gray-800"
      )}
    >
      {content}
      {options && onOptionClick && (
        <div className="flex flex-wrap gap-2 mt-2">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => onOptionClick(opt)}
              className="px-3 py-1 text-xs border rounded-full hover:bg-gray-100 border-gray-300"
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
};

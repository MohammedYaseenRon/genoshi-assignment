// EnhancedMessageBubble.tsx
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Avatar } from "./Avatar";
import { useTheme } from "@/app/context/ThemeContext";

export interface EnhancedMessageProps {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp?: Date | string;
  isQuestion?: boolean;
  options?: string[];
  avatar?: string;
}

export const EnhancedMessageBubble: React.FC<EnhancedMessageProps> = ({
  content,
  sender,
  timestamp = new Date(),
  isQuestion,
  options,
  avatar,
}) => {
  const { theme, themes } = useTheme();
  const isUser = sender === "user";

  // Animation variants
  const variants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      x: isUser ? 20 : -20,
    },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className={cn("flex mb-4", isUser ? "justify-end" : "justify-start")}>
      <div className={cn("flex max-w-[80%]", isUser ? "flex-row-reverse" : "flex-row")}>
        <div className={cn("flex-shrink-0", isUser ? "ml-3" : "mr-3")}>
          <Avatar 
            src={avatar} 
            alt={isUser ? "You" : "Assistant"} 
            isOnline={true} 
            size="md" 
          />
        </div>
        
        <div className={cn("flex flex-col", isUser ? "items-end" : "items-start")}>
          <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
            className={cn(
              "px-4 py-3 rounded-2xl text-sm",
              isUser 
                ? `${themes[theme].primary} text-white` 
                : "bg-gray-100 text-gray-800",
              isUser 
                ? "rounded-tr-none" 
                : "rounded-tl-none"
            )}
          >
            {content}
          </motion.div>

          {options && options.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {options.map((option) => (
                <motion.button
                  key={option}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-700 text-sm transition-all"
                >
                  {option}
                </motion.button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
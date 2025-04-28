import React from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/app/context/ThemeContext";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  placeholder?: string;
  disabled?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  value,
  onChange,
  onSend,
  onKeyDown,
  placeholder = "Type your message here...",
  disabled = false,
}) => {
  const { theme, themes } = useTheme();

  return (
    <div className="relative flex items-center">
      <Input
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        className={cn(
          "pr-12 py-6 font-semibold text-lg text-black border-gray-200 rounded-full focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-blue-500 shadow-sm",
          disabled && "opacity-50 cursor-not-allowed"
        )}
      />
      <Button
        onClick={onSend}
        disabled={!value.trim() || disabled}
        className={cn(
          `absolute right-2 h-10 w-10 rounded-full p-0 ${themes[theme].primary} shadow-md transition-all`,
          (!value.trim() || disabled) && "opacity-50 cursor-not-allowed"
        )}
      >
        <Send className="h-5 w-5 text-white" />
      </Button>
    </div>
  );
};
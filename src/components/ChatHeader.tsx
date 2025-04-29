import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/app/context/ThemeContext";
import { ThemeSelector } from "./ThemeSelector";
import { ChatHeaderProps } from "@/state/types";

export const ChatHeader: React.FC<ChatHeaderProps> = ({
    title,
    subtitle,
    buttonText,
    onButtonClick,
}) => {
    const { theme, themes } = useTheme();

    return (
        <div className={`${themes[theme].primary} flex items-center justify-between gap-4 p-4 border-b border-gray-100`}>
            <div className="flex items-center space-x-3">
                <div>
                    <h1 className="text-lg font-semibold text-white">{title}</h1>
                    <div className="text-sm text-white flex items-center">
                        {subtitle}
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-2">
                <ThemeSelector />
                <Button
                    variant="default"
                    className={`${themes[theme].primary} text-white rounded-full px-4 shadow-md transition-all hover:shadow-lg`}
                    onClick={onButtonClick}
                >
                    {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
        </div>
    );
};
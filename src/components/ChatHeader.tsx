import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/app/context/ThemeContext";
import { ThemeSelector } from "./ThemeSelector";

interface ChatHeaderProps {
    title: string;
    subtitle: string;
    buttonText: string;
    onButtonClick?: () => void;
}

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
                {/* <div className={`w-10 h-10 ${themes[theme].primary} rounded-full flex items-center justify-center shadow-md`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4V20M4 12H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div> */}
                <div>
                    <h1 className="text-lg font-semibold text-white">{title}</h1>
                    <div className="text-sm text-white flex items-center">
                        {/* <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span> */}
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
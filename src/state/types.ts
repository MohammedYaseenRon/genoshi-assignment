export interface AvatarProps {
    src?: string;
    alt?: string;
    isOnline?: boolean;
    size?: "sm" | "md" | "lg";
    className?: string;
}

export interface EnhancedMessageProps {
    id: string;
    content: string;
    sender: "user" | "bot";
    timestamp?: Date | string;
    isQuestion?: boolean;
    options?: string[];
    avatar?: string;
}

export interface ChatInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSend: () => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
    placeholder?: string;
    disabled?: boolean;
}

export interface ChatHeaderProps {
    title: string;
    subtitle: string;
    buttonText: string;
    onButtonClick?: () => void;
}

export interface AvatarProps {
    src?: string;
    alt?: string;
    isOnline?: boolean;
    size?: "sm" | "md" | "lg";
    className?: string;
}


export interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    duration: number;
}




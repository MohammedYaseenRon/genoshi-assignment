"use client"

import React, { useState, useRef, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeProvider, useTheme } from "@/app/context/ThemeContext"
import { ChatHeader } from "./ChatHeader"
import TypingIndicator from "./TypingIndicator"
import { ChatInput } from "./ChatInput"
import AnimatedBackground from "./AnimatedBackground"
import { cn } from "@/lib/utils"
import { Avatar } from "./Avatar"
import { EnhancedMessageProps } from "./MessageBubble"

import {
    Confetti
} from "./ChatAnimation"

// Sample avatars
const BOT_AVATAR = "https://api.dicebear.com/7.x/bottts/svg?seed=assistant"
const USER_AVATAR = "https://api.dicebear.com/7.x/thumbs/svg?seed=user";

const initialMessages: EnhancedMessageProps[] = [
    {
        id: "welcome",
        content: "Welcome to the AI agent! You can build an experience like this to replace complex forms.",
        sender: "bot",
        timestamp: new Date(),
        avatar: BOT_AVATAR,
    },
    {
        id: "intro-question",
        content: "What's your name?",
        sender: "bot",
        isQuestion: true,
        timestamp: new Date(),
        avatar: BOT_AVATAR,
    },
]

const botQuestions: EnhancedMessageProps[] = [
    {
        id: "q1",
        content: "Hi there! What are you looking to accomplish today?",
        sender: "bot",
        isQuestion: true,
        options: ["Create a website", "Build an app", "Set up marketing", "Something else"],
        timestamp: new Date(),
        avatar: BOT_AVATAR,
    },
    {
        id: "q2",
        content: "Great! What's your timeline for this project?",
        sender: "bot",
        isQuestion: true,
        options: ["ASAP", "Within a month", "Next quarter", "Just exploring"],
        timestamp: new Date(),
        avatar: BOT_AVATAR,
    },
    {
        id: "q3",
        content: "What's your budget range for this project?",
        sender: "bot",
        isQuestion: true,
        options: ["Under $5k", "$5k-$10k", "$10k-$25k", "Over $25k"],
        timestamp: new Date(),
        avatar: BOT_AVATAR,
    },
    {
        id: "q4",
        content: "Thanks for sharing that information!\nWould you like to schedule a consultation with one of our experts?", sender: "bot",
        isQuestion: true,
        options: ["Yes, please", "Not right now"],
        timestamp: new Date(),
        avatar: BOT_AVATAR,
    },
]
const ChatInterfaceContent: React.FC = () => {
    const [messages, setMessages] = useState<EnhancedMessageProps[]>(initialMessages);
    const [inputValue, setInputValue] = useState("");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userName, setUserName] = useState("");
    const [formComplete, setFormComplete] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [displayedText, setDisplayedText] = useState("");
    const [currentBotMessage, setCurrentBotMessage] = useState("");
    const [hasUserSentMessage, setHasUserSentMessage] = useState(false); // Track if user has sent a message

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const { theme, themes } = useTheme();

    // Scroll to bottom when messages update
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        if (currentBotMessage) {
            setIsTyping(true);
            setIsComplete(false);
            setDisplayedText("");

            let index = 0;
            const typingSpeed = 50;
            const messageToType = currentBotMessage;

            const typingInterval = setInterval(() => {
                if (index < messageToType.length) {
                    setDisplayedText(messageToType.slice(0, index + 1));
                    index++;
                } else {
                    clearInterval(typingInterval);
                    setIsComplete(true);
                    setIsTyping(false);
                }
            }, typingSpeed);

            return () => clearInterval(typingInterval);
        }
    }, [currentBotMessage]);

    useEffect(() => {
        setDisplayedText(initialMessages[0].content);
        setIsComplete(true);

        setTimeout(() => {
            setMessages(initialMessages);
            setCurrentBotMessage(initialMessages[1].content);
        }, 1000);
    }, []);

    const addBotMessage = (message: EnhancedMessageProps) => {
        setMessages((prev) => [...prev, message]);
        if (message.sender === "bot") {
            setCurrentBotMessage(message.content);
        }
    };

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        const timestamp = new Date();

        const userMessage: EnhancedMessageProps = {
            id: `user-${Date.now()}`,
            content: inputValue,
            sender: "user",
            timestamp,
            avatar: USER_AVATAR,
        };

        setMessages((prev) => [...prev, userMessage]);
        setHasUserSentMessage(true);



        if (messages.find((m) => m.id === "intro-question") && !userName) {
            setUserName(inputValue);
            setIsTyping(true);

            setTimeout(() => {
                const greeting: EnhancedMessageProps = {
                    id: `greeting-${Date.now()}`,
                    content: `Nice to meet you, ${inputValue}! I'll help you complete this form in a conversational way.`,
                    sender: "bot",
                    timestamp: new Date(),
                    avatar: BOT_AVATAR,
                };

                addBotMessage(greeting);

                setTimeout(() => {
                    const nextQuestion = { ...botQuestions[currentQuestionIndex], timestamp: new Date() };
                    addBotMessage(nextQuestion);
                }, 1500);
            }, 1000);
        } else {
            if (currentQuestionIndex < botQuestions.length - 1) {
                setIsTyping(true);
                setTimeout(() => {
                    setCurrentQuestionIndex((prev) => prev + 1);
                    const nextQuestion = {
                        ...botQuestions[currentQuestionIndex + 1],
                        timestamp: new Date(),
                    };
                    addBotMessage(nextQuestion);
                }, 1200);
            } else if (currentQuestionIndex === botQuestions.length - 1 && !formComplete) {
                setIsTyping(true);
                setTimeout(() => {
                    const completeMessage: EnhancedMessageProps = {
                        id: `completion-${Date.now()}`,
                        content: `Thank you, ${userName}! We've collected all the information we need.\nSomeone from our team will reach out to you soon.`,
                        sender: "bot",
                        timestamp: new Date(),
                        avatar: BOT_AVATAR,
                    };
                    addBotMessage(completeMessage);
                    setFormComplete(true);
                    setShowConfetti(true);
                    setTimeout(() => {
                        setShowConfetti(false);
                    }, 3000);
                }, 1500);
            }
        }
        setInputValue("");
    };

    const handleOptionClick = (option: string) => {
        const userMessage: EnhancedMessageProps = {
            id: `user-${Date.now()}`,
            content: option,
            sender: "user",
            timestamp: new Date(),
            avatar: USER_AVATAR,
        };

        setMessages((prev) => [...prev, userMessage]);
        setHasUserSentMessage(true);


        if (currentQuestionIndex < botQuestions.length - 1) {
            setIsTyping(true);
            setTimeout(() => {
                setCurrentQuestionIndex((prev) => prev + 1);
                const nextQuestion = {
                    ...botQuestions[currentQuestionIndex + 1],
                    timestamp: new Date(),
                };
                addBotMessage(nextQuestion);
            }, 1200);
        } else if (currentQuestionIndex === botQuestions.length - 1 && !formComplete) {
            setIsTyping(true);
            setTimeout(() => {
                const completionMessage: EnhancedMessageProps = {
                    id: `completion-${Date.now()}`,
                    content: `Thank you, ${userName}! We've collected all the information we need.\nSomeone from our team will reach out to you soon.`,
                    sender: "bot",
                    timestamp: new Date(),
                    avatar: BOT_AVATAR,
                };
                addBotMessage(completionMessage);
                setFormComplete(true);
                setShowConfetti(true);

                setTimeout(() => {
                    setShowConfetti(false);
                }, 3000);
            }, 1500);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleTryMe = () => {
        setMessages(initialMessages);
        setCurrentBotMessage(initialMessages[0].content);
        setCurrentQuestionIndex(0);
        setUserName("");
        setFormComplete(false);
        setDisplayedText("");
        setIsComplete(false);
        setHasUserSentMessage(false);
    };

    return (
        <div className="w-full max-w-6xl min-h-screen relative flex flex-col rounded-xl overflow-hidden border border-gray-200 shadow-lg">
            <ChatHeader
                title="Welcome to Your Personal Assistant"
                subtitle="Let's get started with your journey"
                buttonText="Let's Begin"
            />

            <div
                ref={chatContainerRef}
                className="flex-1 p-6 space-y-5 bg-white/80 backdrop-blur-sm relative"
                style={{ zIndex: 10, scrollBehavior: "smooth" }}
            >
                <AnimatedBackground />
                <AnimatePresence initial={false}>
                    {messages.map((message) => (
                        <motion.div
                            key={message.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className={cn(
                                "flex items-start gap-4",
                                message.sender === "user" ? "justify-end" : "justify-start"
                            )}
                        >
                            {message.sender === "bot" && (
                                <Avatar src={BOT_AVATAR} alt="Assistant" isOnline={true} />
                            )}
                            <div>
                                <div
                                    className={cn(
                                        "px-5 py-3 rounded-2xl text-lg break-words shadow-sm",
                                        message.sender === "user"
                                            ? `${themes[theme].primary} text-white rounded-br-none`
                                            : "bg-white text-gray-800 rounded-bl-none border border-gray-200"
                                    )}
                                >
                                    {message.sender === "bot" ? (
                                        message.id === messages[messages.length - 1].id &&
                                            messages.length > initialMessages.length ? (
                                            <div>
                                                {displayedText.split("\n").map((line, index) => (
                                                    <span key={index} className="block">
                                                        {line}
                                                    </span>
                                                ))}
                                                {!isComplete && (
                                                    <span className="inline-block w-1 h-4 ml-1 bg-gray-400 animate-pulse" />
                                                )}
                                            </div>
                                        ) : (
                                            <div>
                                                {message.content.split("\n").map((line, index) => (
                                                    <span key={index} className="block">
                                                        {line}
                                                    </span>
                                                ))}
                                            </div>
                                        )
                                    ) : (
                                        message.content
                                    )}
                                </div>
                                {message.options && message.options.length > 0 && (
                                    <div className="mt-3 flex flex-wrap gap-3">
                                        {message.options.map((option) => (
                                            <Button
                                                key={option}
                                                variant="outline"
                                                className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-black hover:border-gray-400 transition-colors rounded-xl px-4 py-2 text-sm shadow-sm"
                                                onClick={() => handleOptionClick(option)}
                                            >
                                                {option}
                                            </Button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {message.sender === "user" && (
                                <Avatar src={USER_AVATAR} alt="User" isOnline={true} />
                            )}
                        </motion.div>
                    ))}
                    {isTyping &&
                        hasUserSentMessage &&
                        messages[messages.length - 1]?.sender !== "bot" && (
                            <div className="flex items-start gap-4">
                                <Avatar src={BOT_AVATAR} alt="Assistant" isOnline={true} />
                                <TypingIndicator />
                            </div>
                        )}
                </AnimatePresence>
                <div ref={messagesEndRef} />
                <Confetti isActive={showConfetti} />
            </div>

            <div className="p-6 border-gray-100" style={{ zIndex: 10 }}>
                {!formComplete ? (
                    <ChatInput
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onSend={handleSendMessage}
                        onKeyDown={handleKeyDown}
                    />
                ) : (
                    <div className="flex justify-center">
                        <Button
                            onClick={handleTryMe}
                            className={`${themes[theme].primary} text-white rounded-full px-6 py-6 shadow-md hover:shadow-lg transition-all`}
                        >
                            Try me again
                        </Button>
                    </div>
                )}
                <div className="text-xs text-center text-gray-400 mt-4">Your Personal AI BOT</div>
            </div>
        </div>
    );
};

export const ChatInterface: React.FC = () => {
    return (
        <ThemeProvider>
            <ChatInterfaceContent />
        </ThemeProvider>
    );
};
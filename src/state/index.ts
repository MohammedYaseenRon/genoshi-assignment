import React from "react"
import { EnhancedMessageProps } from "./types"


const BOT_AVATAR = "https://api.dicebear.com/7.x/bottts/svg?seed=assistant"


export const initialMessages: EnhancedMessageProps[] = [
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

export const botQuestions: EnhancedMessageProps[] = [
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
# Chat Interface

A modern interactive chat interface built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion. This application provides a conversational experience where users can interact with a bot to complete a form in a natural engaging way.The UI features dynamic themes, animations, and a delightful user experience.

## Features

- **Conversational Flow**: The bot guides users through questions (e.g., "What's your name?", "What are you looking to accomplish today?") with text input and multiple-choice options.
- **Dynamic Themes**: Switch between `blue`, `purple`, and `green` themes using colored dots in the header, affecting the background, buttons, and message bubbles.
- **Smooth Animations**:
  - Typing effect for bot messages.
  - Floating background bubbles with varying colors, sizes, and opacity.
  - Confetti animation on form completion.
  - Smooth scrolling for new messages.
- **Modern UI**:
  - Clean header with a gradient background, theme selector dots, and a "Let's Begin" button.
  - Message bubbles with avatars, styled with shadows and borders.
  - Rounded option buttons with hover effects.
- **Responsive Design**: Optimized for desktop and mobile screens.
- **Accessibility**: High-contrast text, clear buttons, and intuitive interactions.

## Screenshots

### Initial Chat Screen
![Initial Chat Screen](/screenshots/ss1.png)  
*The chat starts with a welcome message and asks for the user's name.*

### Mobile View
![Mobile View](/screenshots/ss2.png)  
*Users can switch themes using the colored dots (blue, purple, green).*


## Prerequisites

- **Node.js**: Version 18 or higher
- **npm** or **Yarn**: For package management
- A modern browser (Chrome, Firefox, Safari, Edge)

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/chat-interface.git
cd chat-interface
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Run the Application
```bash
npm run dev
# or
yarn dev
```
Open `http://localhost:3000` in your browser to see the chat interface.

## Usage

1. **Start the Chat**: The chat begins with a welcome message from the bot. .
2. **Interact with the Bot**: 
   - Answer the bot's questions by typing in the input field (e.g., your name) or selecting from multiple-choice options.
   - The bot will guide you through a form (e.g., project goals, timeline, budget, consultation).
3. **Switch Themes**: Use the colored dots in the header (blue, purple, green) to change the theme, which updates the background, buttons, and message bubbles.
4. **Complete the Form**: Once all questions are answered, the bot will display a confirmation message with a confetti animation. Click "Try me again" to restart.

## Project Structure

- **`app/context/ThemeContext.tsx`**: Manages theme state and provides theme switching functionality.
- **`lib/utils.ts`**: Utility functions for combining Tailwind CSS classes.
- **`components/Avatar.tsx`**: Renders user and bot avatars with an online status dot.
- **`components/TypingIndicator.tsx`**: Displays a typing animation for bot responses.
- **`components/Confetti.tsx`**: Shows a confetti animation on form completion.
- **`components/AnimatedBackground.tsx`**: Creates a dynamic background with floating bubbles.
- **`components/ChatInterface.tsx`**: The main chat interface component.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a pull request.

## Future Improvements

- **LLM Usage for Real Time Conversation**: Allow LLM to interact with human.
- **Voice Input**: Add voice input using the Web Speech API.
- **Emoji Reactions**: Allow users to react to messages with emojis.
- **Timestamps**: Display message timestamps (e.g., "12:34 PM").
- **Delivered Indicator**: Show a "Delivered" label or checkmark for user messages.
- **Enhanced Theming**: Persist theme choice using localStorage and add more theme options.


## Acknowledgments

- Inspired by modern chat interfaces like WhatsApp and Slack.
- Built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Framer Motion](https://www.framer.com/motion/).
- Avatars generated using [DiceBear](https://www.dicebear.com/).

---

This README provides a clear guide for users to set up, run, and contribute to the project while highlighting its features and potential improvements. Let me know if you’d like to add or modify any sections!
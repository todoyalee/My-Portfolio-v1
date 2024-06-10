// src/chatbot/config.js
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "4inatechnology chatbot",
  initialMessages: [
    createChatBotMessage(`Hi! I'm here to help you navigate through my portfolio. What would you like to know?`)
  ],
};

export default config;

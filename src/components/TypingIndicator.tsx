"use client"

import type React from "react"
import { motion } from "framer-motion"

const TypingIndicator: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      className="flex items-center space-x-1 p-3 max-w-[150px] bg-gray-100 rounded-2xl ml-2 mb-4"
    >
      <motion.div
        className="text-base font-bold text-black"
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      >
        Thinking...
      </motion.div>
    </motion.div>
  )
}

export default TypingIndicator

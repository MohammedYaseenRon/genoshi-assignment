import { ChatInterface } from "@/components/chat-interface"

export default function Home() {
  return (
    <div className="bg-white flex items-center justify-center py-4">
      <div className="w-full max-w-5xl border border-gray-200 rounded-lg h-[600px] shadow-lg">
        <ChatInterface />
      </div>
    </div>
  )
}

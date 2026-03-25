import { useState, useRef, useEffect } from 'react'
import { TChatMessage } from '../types'
import Message from './Message'

type ChatBoxProps = {
  messages: TChatMessage[]
  onSendMessage: (content: string) => void
  disabled?: boolean
}

export default function ChatBox({ messages, onSendMessage, disabled }: ChatBoxProps) {
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed || disabled) return
    if (trimmed.length > 200) {
      alert('问题长度不能超过200字')
      return
    }
    onSendMessage(trimmed)
    setInput('')
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.length === 0 && (
          <div className="text-center text-slate-500 py-8">
            <p>开始提问吧</p>
          </div>
        )}
        {messages.map(msg => (
          <Message key={msg.id} message={msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-slate-700">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={disabled ? '游戏已结束' : '输入你的问题...'}
            disabled={disabled}
            className="flex-1 bg-slate-700 text-slate-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed"
            maxLength={200}
          />
          <button
            type="submit"
            disabled={!input.trim() || disabled}
            className="bg-amber-500 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            发送
          </button>
        </div>
      </form>
    </div>
  )
}

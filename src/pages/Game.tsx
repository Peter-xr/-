import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { STORIES } from '../data/stories'
import { TChatMessage } from '../types'
import ChatBox from '../components/ChatBox'
import { simulateAIAnswer, formatAnswer } from '../services/aiService'

export default function Game() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [messages, setMessages] = useState<TChatMessage[]>([])
  const [isRevealed, setIsRevealed] = useState(false)

  const story = STORIES.find(s => s.id === id)

  useEffect(() => {
    if (!story) {
      navigate('/')
    }
  }, [story, navigate])

  if (!story) return null

  const handleSendMessage = (content: string) => {
    const userMessage: TChatMessage = {
      id: `msg-${Date.now()}-user`,
      role: 'user',
      content,
      timestamp: Date.now()
    }

    const answer = simulateAIAnswer(content, story.bottom)
    const aiMessage: TChatMessage = {
      id: `msg-${Date.now()}-ai`,
      role: 'assistant',
      content: formatAnswer(answer),
      timestamp: Date.now() + 1
    }

    setMessages(prev => [...prev, userMessage, aiMessage])
  }

  const handleReveal = () => {
    setIsRevealed(true)
    navigate(`/result/${id}`, {
      state: {
        messages,
        story
      }
    })
  }

  const handleEnd = () => {
    navigate(`/result/${id}`, {
      state: {
        messages,
        story
      }
    })
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <header className="bg-slate-800 border-b border-slate-700 p-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="text-slate-400 hover:text-amber-400 transition-colors mb-3"
          >
            ← 返回首页
          </button>
          <h2 className="text-2xl font-bold text-amber-400 mb-2">{story.title}</h2>
          <p className="text-slate-300 bg-slate-700 rounded-lg p-4">{story.surface}</p>
        </div>
      </header>

      <div className="flex-1 max-w-4xl w-full mx-auto flex flex-col">
        <ChatBox
          messages={messages}
          onSendMessage={handleSendMessage}
          disabled={isRevealed}
        />
      </div>

      <footer className="bg-slate-800 border-t border-slate-700 p-4">
        <div className="max-w-4xl mx-auto flex gap-3 justify-center">
          <button
            onClick={handleReveal}
            disabled={isRevealed}
            className="bg-amber-500 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            查看汤底
          </button>
          <button
            onClick={handleEnd}
            className="bg-slate-600 text-slate-100 px-6 py-3 rounded-lg font-semibold hover:bg-slate-500 transition-colors"
          >
            结束游戏
          </button>
        </div>
      </footer>
    </div>
  )
}

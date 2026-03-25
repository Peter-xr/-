import { useLocation, useNavigate } from 'react-router-dom'
import { TStory, TChatMessage } from '../types'
import StoryReveal from '../components/StoryReveal'
import Message from '../components/Message'

type LocationState = {
  story: TStory
  messages: TChatMessage[]
}

export default function Result() {
  const navigate = useNavigate()
  const location = useLocation()
  const state = location.state as LocationState

  if (!state?.story) {
    navigate('/')
    return null
  }

  const { story, messages } = state

  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <StoryReveal story={story} />

        <div className="mt-8 bg-slate-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-bold text-amber-400 mb-4">你的推理过程</h3>
          {messages.length === 0 ? (
            <p className="text-slate-500 text-center py-8">没有提问记录</p>
          ) : (
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {messages.map(msg => (
                <Message key={msg.id} message={msg} />
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => navigate('/')}
            className="bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition-colors shadow-lg"
          >
            再来一局
          </button>
        </div>
      </div>
    </div>
  )
}

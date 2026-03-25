import { useNavigate } from 'react-router-dom'
import { STORIES } from '../data/stories'
import GameCard from '../components/GameCard'

export default function Home() {
  const navigate = useNavigate()

  const handleSelectStory = (id: string) => {
    navigate(`/game/${id}`)
  }

  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-amber-400 mb-4">AI海龟汤</h1>
          <p className="text-slate-400 text-lg">选择一个谜题,开始你的推理之旅</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STORIES.map(story => (
            <GameCard key={story.id} story={story} onSelect={handleSelectStory} />
          ))}
        </div>

        {STORIES.length === 0 && (
          <div className="text-center text-slate-500 py-20">
            <p>暂无故事</p>
          </div>
        )}
      </div>
    </div>
  )
}

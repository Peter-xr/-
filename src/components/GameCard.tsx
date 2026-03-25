import { TStory } from '../types'

type GameCardProps = {
  story: TStory
  onSelect: (id: string) => void
}

const DIFFICULTY_CONFIG = {
  easy: { label: '简单', color: 'bg-green-500' },
  medium: { label: '中等', color: 'bg-yellow-500' },
  hard: { label: '困难', color: 'bg-red-500' }
}

export default function GameCard({ story, onSelect }: GameCardProps) {
  const difficultyConfig = DIFFICULTY_CONFIG[story.difficulty]

  return (
    <div
      onClick={() => onSelect(story.id)}
      className="bg-slate-800 rounded-lg p-6 shadow-lg hover:shadow-xl hover:bg-slate-750 transition-all cursor-pointer border border-slate-700"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-amber-400">{story.title}</h3>
        <span className={`${difficultyConfig.color} text-white text-xs px-3 py-1 rounded-full`}>
          {difficultyConfig.label}
        </span>
      </div>
      <p className="text-slate-300 text-sm line-clamp-2">{story.surface}</p>
    </div>
  )
}

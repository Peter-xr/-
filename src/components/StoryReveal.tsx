import { TStory } from '../types'

type StoryRevealProps = {
  story: TStory
}

export default function StoryReveal({ story }: StoryRevealProps) {
  return (
    <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg p-8 shadow-2xl">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">真相揭晓</h2>
        <div className="w-20 h-1 bg-slate-900 mx-auto rounded"></div>
      </div>
      <div className="bg-slate-900 bg-opacity-20 rounded-lg p-6">
        <p className="text-slate-900 text-lg leading-relaxed">{story.bottom}</p>
      </div>
    </div>
  )
}

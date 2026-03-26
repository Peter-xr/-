import { STORIES } from '../constants/stories'
import { GameCard } from '../components/GameCard'

export default function Home() {
  return (
    <div className="min-h-svh bg-slate-900 text-amber-400 p-4">
      <div className="mx-auto w-full max-w-5xl">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">AI海龟汤</h1>
          <p className="mt-2 text-slate-300">
            选择一条故事，向 AI 主持人提问。你只能得到「是 / 否 / 无关」，但真相就藏在其中。
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STORIES.map((story) => (
            <GameCard key={story.id} story={story} />
          ))}
        </section>
      </div>
    </div>
  )
}


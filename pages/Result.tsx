import { useMemo } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { STORIES } from '../constants/stories'

type TChatRole = 'user' | 'assistant'
type TChatMessage = {
  id: string
  role: TChatRole
  content: string
}

type TResultLocationState = {
  messages?: TChatMessage[]
}

export default function Result() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const location = useLocation()

  const story = useMemo(() => STORIES.find((s) => s.id === id), [id])
  const state = (location.state as TResultLocationState | null) ?? null
  const messages = state?.messages ?? []

  if (!id || !story) {
    return (
      <div className="min-h-svh bg-slate-900 p-4 text-amber-400">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-2xl font-bold">未找到该关卡</h1>
          <button
            className="mt-4 inline-flex rounded-lg bg-amber-400 px-4 py-2 font-semibold text-slate-900 shadow-lg hover:bg-amber-300"
            onClick={() => navigate('/')}
          >
            返回大厅
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-svh bg-slate-900 p-4">
      <div className="mx-auto w-full max-w-4xl">
        <header className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-amber-300">
              揭晓真相
            </h1>
            <p className="mt-1 text-sm text-slate-300">{story.title}</p>
          </div>
          <div className="flex gap-2">
            <button
              className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-slate-200 ring-1 ring-slate-700 hover:bg-slate-700"
              onClick={() => navigate('/')}
            >
              结束游戏
            </button>
            <button
              className="rounded-lg bg-amber-400 px-3 py-2 text-sm font-semibold text-slate-900 shadow-lg hover:bg-amber-300"
              onClick={() => navigate(`/game/${story.id}`)}
            >
              再来一局
            </button>
          </div>
        </header>

        <section className="rounded-lg bg-slate-800/70 p-4 shadow-lg ring-1 ring-slate-700">
          <h2 className="text-lg font-semibold text-amber-300">汤底</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-200">
            {story.bottom}
          </p>
        </section>

        <section className="mt-4 rounded-lg bg-slate-800/70 p-4 shadow-lg ring-1 ring-slate-700">
          <h2 className="text-lg font-semibold text-amber-300">推理过程</h2>

          <div className="mt-3 max-h-72 overflow-auto rounded-md bg-slate-900/40 p-3 ring-1 ring-slate-700">
            {messages.length === 0 ? (
              <p className="text-sm text-slate-400">
                暂无对话记录（请从游戏页面发起提问后再查看汤底）。
              </p>
            ) : (
              <div className="space-y-3">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={
                      m.role === 'user'
                        ? 'flex justify-end'
                        : 'flex justify-start'
                    }
                  >
                    <div
                      className={
                        m.role === 'user'
                          ? 'max-w-[80%] rounded-lg bg-amber-400 px-3 py-2 text-sm font-semibold text-slate-900'
                          : 'max-w-[80%] rounded-lg bg-slate-700 px-3 py-2 text-sm text-slate-100'
                      }
                    >
                      {m.content}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}


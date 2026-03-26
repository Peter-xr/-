export default function Game() {
  // 先做最小可用占位页：路由与参数打通后再逐步补齐玩法
  // （按你的要求：先创建空组件）

  return (
    <div className="min-h-svh bg-slate-900 p-4 text-amber-400">
      <div className="mx-auto w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-amber-300">Game</h1>
        <p className="mt-2 text-sm text-slate-300">
          这是占位页面，后续会在这里实现提问与对话逻辑。
        </p>
      </div>
    </div>
  )
}


# AGENTS.md

## 项目目标
开发一个基于 React + TypeScript + Tailwind CSS 的 AI 海龟汤游戏网站。  
优先级：核心功能可用 > 代码可维护 > 视觉优化。

---

## 技术栈
- React（函数式组件 + Hooks）
- TypeScript（强类型）
- Tailwind CSS（原子化样式）
- Vite（构建工具）

---

## 核心功能范围
1. 题面展示（海龟汤问题）
2. 玩家提问输入
3. AI 主持人回答（是/否/无关/接近）
4. 对话记录展示
5. 揭晓答案与重新开始

非核心功能（复杂动画、排行系统、社交功能）默认不做，除非明确要求。

---

## 编码规范

### 命名
- 组件名：PascalCase
- 函数/变量：camelCase
- 常量：UPPER_SNAKE_CASE
- 类型：以 T 开头（如 TStory、TChatMessage）
- Hook：useXxx

### TypeScript
- 为 props、状态、API 返回值定义明确类型
- 尽量避免 any；必须使用时注明原因
- 公共类型放在 `src/types/`

### React
- 仅使用函数式组件
- 组件职责单一，可复用
- 复杂逻辑抽离到 `hooks/` 或 `services/`

### 注释
- 注释重点写“为什么”，不是“做了什么”
- 只在复杂逻辑处添加简洁注释，避免噪音注释

---

## UI 设计规范
- 主背景：`bg-slate-900`
- 强调色：`text-amber-400`
- 圆角：`rounded-lg`
- 阴影：`shadow-lg`
- 保持神秘悬疑风格，移动端优先适配

---

## 安全规范
- API Key 只能通过环境变量读取，禁止硬编码
- 推荐变量：
  - `VITE_AI_API_URL`
  - `VITE_AI_MODEL`
  - `VITE_AI_API_KEY`
- 禁止提交 `.env` 到仓库
- 不在日志/报错中输出敏感信息

---

## 目录建议
```txt
src/
  components/
  constants/
  hooks/
  services/
  types/
  utils/
  App.tsx
  main.tsx
```

---

## 开发流程（每个功能都遵循）
1. 明确功能边界与输入输出
2. 先实现最小可用版本（MVP）
3. 补全类型与必要注释
4. 本地验证功能
5. 再做小幅优化，不做过度重构

---

## 测试要求
每个功能完成后至少手动检查：

- [ ] 主流程可用（出题→提问→回答→揭晓）
- [ ] 多轮提问状态正确
- [ ] 移动端显示正常（不溢出、不遮挡）
- [ ] 桌面端显示正常
- [ ] AI 异常时有兜底提示
- [ ] 无 API Key 泄露风险

---

## 提交规范（可选）
- `feat:` 新功能
- `fix:` 修复问题
- `refactor:` 重构（无行为变化）
- `style:` 样式调整
- `docs:` 文档更新
- `test:` 测试相关

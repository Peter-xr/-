export type TDifficulty = 'easy' | 'medium' | 'hard'

export type TStory = {
  id: string
  title: string
  difficulty: TDifficulty
  surface: string
  bottom: string
}

export type TMessageRole = 'user' | 'assistant'

export type TChatMessage = {
  id: string
  role: TMessageRole
  content: string
  timestamp: number
}

export type TAnswer = 'yes' | 'no' | 'irrelevant'

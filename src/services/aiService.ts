import { TAnswer } from '../types'

export function simulateAIAnswer(question: string, bottom: string): TAnswer {
  const q = question.toLowerCase()
  const b = bottom.toLowerCase()

  const keywords = b.split(/[,。、\s]+/).filter(w => w.length > 1)
  const matchCount = keywords.filter(kw => q.includes(kw)).length

  if (matchCount >= 2) return 'yes'

  const negativePatterns = ['不是', '没有', '不会', '不能']
  if (negativePatterns.some(p => q.includes(p))) {
    if (keywords.some(kw => q.includes(kw))) return 'no'
  }

  if (matchCount === 1) return 'yes'

  return 'irrelevant'
}

export function formatAnswer(answer: TAnswer): string {
  const answerMap: Record<TAnswer, string> = {
    yes: '是',
    no: '否',
    irrelevant: '无关'
  }
  return answerMap[answer]
}

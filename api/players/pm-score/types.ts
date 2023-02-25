import { Int32 } from "@airtasker/spot"

export interface ProfilePMScore {
  score: Int32
  lastScore: {
    value: number
    trend: 'up' | 'down'
    ofLastMatches: Int32
    info: string
  }
  scoreGraph: 'unknown'
  events : {
    value: number
    trend: 'up' | 'down'
    info: string
  }[]
  comparisonPercentage: Int32
}
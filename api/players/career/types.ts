import { DateTime, Int32 } from "@airtasker/spot"

export interface ProfileCareer {
  season: string
  score: {
    value: number
    trend: 'up' | 'down'
  }
  data: {
    team: string
    teamLogoUrl: string
    competition: string
    season?: 'Wiosna' | 'Lato' | 'Jesień' | 'Zima'
    mainTeam: boolean
    matches: Int32
    goals: Int32
    avgGoals: number
    avgMinutes: number
    totalMinutes: Int32
  }[]
  total: {
    matches: Int32
    goals: Int32
    avgGoals: number
    avgMinutes: number
    totalMinutes: Int32
  }
}
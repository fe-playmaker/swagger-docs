import { Date, Int32 } from "@airtasker/spot"

export interface ProfileMatches {
  season: string
  matches: {
    homeTeam: {
      logoUrl: string
      name: string
      score: Int32
      mainTeam: boolean
    }
    awayTeam: {
      logoUrl: string
      name: string
      score: Int32
      mainTeam: boolean
    }
    wideoUrl?: string
    date: Date
    competition: string
    status: 'win' | 'loss' | 'draw'
    minutes: Int32
    goals?: Int32
    clearAccounts?: Int32
    score?: {
      value: number
      trend: 'up' | 'down'
    }
    yellowCards: Int32
    redCards: Int32
    additional?: string
  }[]
  total: {
    minutes: Int32
    goals?: Int32
    clearAccounts?: Int32
    score: {
      value: number
      trend: 'up' | 'down'
    }
    yellowCards: Int32
    redCards: Int32
  }
  avgMatch: {
    minutes: Int32
    goals?: Int32
    clearAccounts?: Int32
    score: {
      value: number
      trend: 'up' | 'down'
    }
    yellowCards: Int32
    redCards: Int32
  }
}
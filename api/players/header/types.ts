import { DateTime, Int32 } from "@airtasker/spot"

export interface ProfileHeader {
  premium: boolean
  score: {
    value: number
    trend: 'up' | 'down'
  }
  avatarUrl: string
  firstName: string
  lastName: string
  age: Int32
  position: string
  competition: string
  ownProfile: boolean
  lastActivity: DateTime
  team: string
  status: {
    type: 'searchingForClub' | string
    description?: string
    localization?: {
      name: string
      range: Int32
    }
    expectations?: string[]
    additional?: string
  }
}
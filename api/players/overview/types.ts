import { ProfileMatches } from '../matches/types'
import { ProfileCareer } from '../career/types'
import { Int32, Date } from '@airtasker/spot'

export interface ProfileOverview {
	inShort: {
		title: string
		icon: string
	}[]
	transfers: {
		id: string
		from: {
			logoUrl: string
			name: string
		}
		to: {
			logoUrl: string
			name: string
		}
		type: string
		date: Date
	}[]
	similarPlayers: {
		name: string
		avatarUrl: string
		premium: boolean
		age: Int32
		position: string
		team: string
		competition: string
		score: {
			value: Int32
			trend: 'up' | 'down'
		}
	}[]
	experience: {
		data: {
			competetion: string
			competitionLogoUrl: string
			seasons: Int32
			matches: Int32
			goals: Int32
			avgGoals: Int32
			avgMinutes: Int32
		}[]
		total: {
			seasons: Int32
			matches: Int32
			goals: Int32
			avgGoals: Int32
			avgMinutes: Int32
		}
	}
	playerData: {
		altPosition: string
		position: string
		betterLeg: string
		height: Int32
		weight: Int32
		location: string
		age: Int32
		firstName: string
		lastName: string
		videoUrl?: string
	}
	lastMatches: {
		additional: {
			type: 'standedOut' | 'playedWorse'
		}
		matches: ProfileMatches
	}
	career: ProfileCareer
	regularity: {
		additional: {
			type: 'key' | 'regular'
			teamLogoUrl?: string
		}
		totalParticipationPercentage: Int32
		ofMatches: Int32
		firstEleven: Int32
		fromBench: Int32
		bench: Int32
		outsideCadre: Int32
	}
	pmScore: {
		score: Int32
		lastScore: {
			value: number
			trend: 'up' | 'down'
			ofLastMatches: Int32
		}
		graphData: 'unknown'
	}
}

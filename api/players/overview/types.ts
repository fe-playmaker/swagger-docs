import { ProfileMatches } from '../matches/types'
import { Int32 } from '@airtasker/spot'

export interface ProfileOverview {
	inShort: {
		title: string
		icon: string
	}[]
	transfers: {
		id: Int32
		from: {
			logo: string
			name: string
		}
		to: {
			logo: string
			name: string
		}
		type: string
		date: string
	}[]
	similarPlayers: {
		name: string
		image: string
		score: Int32
		premium: boolean
		age: Int32
		scoreTrend: 'up' | 'down'
		position: string
		team: string
		competition: string
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
		name: string
		clubLogo: string
		video: string
	}
	lastMatch: {
		playerStandedOut: boolean
		match: ProfileMatches
	}
	regularity: {
		totalParticipationPercentage: Int32
		ofMatches: Int32
		firstEleven: Int32
		fromBench: Int32
		bench: Int32
		outsideCadre: Int32
	}
}

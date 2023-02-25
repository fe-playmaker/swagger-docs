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
		imageUrl: string
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
		name: string
		clubLogoUrl?: string
		videoUrl?: string
	}
	lastMatch: {
		additional: {
			type: 'standedOut' | 'playedWorse'
		}
		match: ProfileMatches
	}
	regularity: {
		additional: {
			type: 'key' | 'regular'
			teamLogo?: string
		}
		totalParticipationPercentage: Int32
		ofMatches: Int32
		firstEleven: Int32
		fromBench: Int32
		bench: Int32
		outsideCadre: Int32
	}
	career: ProfileCareer
}

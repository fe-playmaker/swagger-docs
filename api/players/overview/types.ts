import { ProfileMatches } from '../matches/types'
import { ProfileCareer } from '../career/types'
import { Int32, Date } from '@airtasker/spot'
import { ProfilePMScore } from '../pm-score/types'

export interface ProfileOverviewRegularity {
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

export interface ProfileOverviewLastMatches {
	additional: {
		type: 'standedOut' | 'playedWorse'
	}
	data: ProfileMatches
}

export interface ProfileOverviewPMScore {
	score: Int32
	lastScore: {
		value: number
		trend: 'up' | 'down'
		ofLastMatches: Int32
	}
	scoreGraph: 'unknown'
}

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
		id: string
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
		team: {
			id: string
			name: string
			competition: string
		}
		altPosition?:
			| 'Napastnik'
			| 'Lewy Pomocnik'
			| 'Środkowy pomocnik ofensywny'
			| 'Środkowy pomocnik'
			| 'Środkowy pomocnik defensywny'
			| 'Lewy obrońca'
			| 'Środkowy obrońca'
			| 'Prawy obrońca'
			| 'Bramkarz'
		position?:
			| 'Napastnik'
			| 'Lewy Pomocnik'
			| 'Środkowy pomocnik ofensywny'
			| 'Środkowy pomocnik'
			| 'Środkowy pomocnik defensywny'
			| 'Lewy obrońca'
			| 'Środkowy obrońca'
			| 'Prawy obrońca'
			| 'Bramkarz'
		betterLeg: string
		height: Int32
		weight: Int32
		location: string
		age: Int32
		firstName: string
		lastName: string
		videoUrl?: string
	}
	career: ProfileCareer
}

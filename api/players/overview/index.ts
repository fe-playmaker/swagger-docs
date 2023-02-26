import { body, endpoint, pathParams, queryParams, request, response, String } from '@airtasker/spot'
import { ProfileOverview, ProfileOverviewLastMatches, ProfileOverviewPMScore, ProfileOverviewRegularity } from './types'

@endpoint({
	method: 'GET',
	path: '/players/:id/overview',
	tags: ['Players'],
})
class PlayerProfileOverview {
	@request
	request(
		@pathParams
		pathParams: {
			id: String
		}
	) {}

	@response({ status: 201 })
	successfulResponse(@body body: ProfileOverview) {}
}

@endpoint({
	method: 'GET',
	path: '/players/:id/overview/regularity',
	tags: ['Players'],
})
class PlayerProfileOverviewRegularity {
	@request
	request(
		@pathParams
		pathParams: {
			id: String
		},
		@queryParams
    queryParams: {
      teamId?: string
    }
	) {}

	@response({ status: 201 })
	successfulResponse(@body body: ProfileOverviewRegularity) {}
}

@endpoint({
	method: 'GET',
	path: '/players/:id/overview/last-matches',
	tags: ['Players'],
})
class PlayerProfileOverviewLastMatches{
	@request
	request(
		@pathParams
		pathParams: {
			id: String
		},
		@queryParams
    queryParams: {
      teamId?: string
    }
	) {}

	@response({ status: 201 })
	successfulResponse(@body body: ProfileOverviewLastMatches) {}
}

@endpoint({
	method: 'GET',
	path: '/players/:id/overview/pm-score',
	tags: ['Players'],
})
class PlayerProfileOverviewPMScore{
	@request
	request(
		@pathParams
		pathParams: {
			id: String
		},
    @queryParams
    queryParams: {
      show: 'last5Matches' | 'lastRound' | 'lastSeason' | 'last2Years' | 'last3Years'
    }
	) {}

	@response({ status: 201 })
	successfulResponse(@body body: ProfileOverviewPMScore) {}
}

import { body, endpoint, pathParams, queryParams, request, response, String } from '@airtasker/spot'
import { ProfileOverview } from './types'

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
		},
		@queryParams
		queryParams: {
			pmScoreGraph: 'last5Matches' | 'lastRound' | 'lastSeason' | 'last2Years' | 'last3Years'
		}
	) {}

	@response({ status: 201 })
	successfulResponse(@body body: ProfileOverview) {}
}

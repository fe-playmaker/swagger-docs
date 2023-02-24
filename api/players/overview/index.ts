import { body, endpoint, pathParams, queryParams, request, response, String } from '@airtasker/spot'
import { ProfileOverview } from './types'

@endpoint({
	method: 'GET',
	path: '/players/:id/overview',
	tags: ['Players'],
})
class PlayerProfilePMScore {
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
	successfulResponse(@body body: ProfileOverview[]) {}
}

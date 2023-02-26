import { body, endpoint, queryParams, request, response } from "@airtasker/spot";
import { TeamsListItem } from "./types";

@endpoint({
  method: "GET",
  path: "/teams/list",
  tags: ["Teams"]
})
class TeamsList {
	@request
	request(
		@queryParams
    queryParams: {
      playerId?: string
    }
	) {}

  @response({ status: 201 })
  successfulResponse(
    @body body: TeamsListItem[]
  ) {}
}

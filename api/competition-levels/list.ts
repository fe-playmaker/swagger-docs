import { body, endpoint, queryParams, request, response } from "@airtasker/spot";
import { CommonListItem } from "../types";

@endpoint({
  method: "GET",
  path: "/competition-levels/list",
  tags: ["Competition-levels"]
})
class CompetitionLevelsList {
	@request
	request(
		@queryParams
    queryParams: {
      playerId?: string
    }
	) {}

  @response({ status: 201 })
  successfulResponse(
    @body body: CommonListItem[]
  ) {}
}

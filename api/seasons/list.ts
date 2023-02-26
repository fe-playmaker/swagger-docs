import { body, endpoint, queryParams, request, response } from "@airtasker/spot";
import { CommonListItem } from "../types";

@endpoint({
  method: "GET",
  path: "/seasons/list",
  tags: ["Seasons"]
})
class SeasonsList {
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

import { body, endpoint, pathParams, request, response, String } from "@airtasker/spot";
import { ProfileMatches } from "./types"

@endpoint({
  method: "GET",
  path: "/players/:id/matches",
  tags: ["Players"]
})
class PlayerProfileMatches {
  @request
  request(
    @pathParams
    pathParams: {
      id: String;
    }
  ) {}

  /**
    examples: 
      - season: "Wiosna 21/22"
   */
  @response({ status: 201 })
  successfulResponse(
    @body body: ProfileMatches
  ) {}
}

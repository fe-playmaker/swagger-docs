import { api, body, endpoint, pathParams, request, response, String } from "@airtasker/spot";
import { ProfileCareer } from "./types"

@endpoint({
  method: "GET",
  path: "/players/:id/career",
  tags: ["Players"]
})
class PlayerProfileCareer {
  @request
  request(
    @pathParams
    pathParams: {
      id: String;
    }
  ) {}

    /**
    examples: 
      - season: "21/22"
   */
  @response({ status: 201 })
  successfulResponse(
    @body body: ProfileCareer[]
  ) {}
}

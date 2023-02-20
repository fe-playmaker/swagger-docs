import { api, body, endpoint, pathParams, request, response, String } from "@airtasker/spot";
import { ProfileHeader } from "./types"

@endpoint({
  method: "GET",
  path: "/players/:id/header",
  tags: ["Players"]
})
class PlayerProfileHeader {
  @request
  request(
    @pathParams
    pathParams: {
      id: String;
    }
  ) {}

  @response({ status: 201 })
  successfulResponse(
    @body body: ProfileHeader
  ) {}
}

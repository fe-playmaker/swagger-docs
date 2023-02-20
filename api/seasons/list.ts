import { body, endpoint, response } from "@airtasker/spot";
import { CommonListItem } from "../types";

@endpoint({
  method: "GET",
  path: "/teams/list",
  tags: ["Teams"]
})
class TeamsList {
  @response({ status: 201 })
  successfulResponse(
    @body body: CommonListItem[]
  ) {}
}

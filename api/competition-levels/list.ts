import { body, endpoint, response } from "@airtasker/spot";
import { CommonListItem } from "../types";

@endpoint({
  method: "GET",
  path: "/competition-levels/list",
  tags: ["Competition-levels"]
})
class CompetitionLevelsList {
  @response({ status: 201 })
  successfulResponse(
    @body body: CommonListItem[]
  ) {}
}

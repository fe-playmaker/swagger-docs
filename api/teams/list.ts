import { body, endpoint, response } from "@airtasker/spot";
import { CommonListItem } from "../types";

@endpoint({
  method: "GET",
  path: "/seasons/list",
  tags: ["Seasons"]
})
class SeasonsList {
  @response({ status: 201 })
  successfulResponse(
    @body body: CommonListItem[]
  ) {}
}

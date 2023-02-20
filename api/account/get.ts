import { body, endpoint, headers, request, response } from "@airtasker/spot";
import { CommonListItem } from "../types";
import { AccountData } from "./types";

@endpoint({
  method: "GET",
  path: "/account",
  tags: ["Account"]
})
class GetAccount {
  @request
  request(
    @headers
    headers: {
      /** Bearer Token */
      Authorization: string;
    }
  ) {}

  /** data not complete */
  @response({ status: 201 })
  successfulResponse(
    @body body: AccountData
  ) {}
}

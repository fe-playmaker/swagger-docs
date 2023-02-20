import { body, endpoint, request, response } from "@airtasker/spot";
import { CommonListItem } from "../types";
import { LoginParams, LoginResponse } from "./types";

@endpoint({
  method: "POST",
  path: "/auth/login",
  tags: ["Auth"]
})
class Login {
  @request
  request(@body body: LoginParams) {}

  @response({ status: 201 })
  successfulResponse(
    @body body: LoginResponse
  ) {}
}

import { generateResponse } from "../helpers/generateResponse.js";
export const basicAuthorizer = async (event, context, callback) => {
  try {
    const headers = event.headers;

    if (!headers) {
      console.log("Headers are undefined or null");
      return callback("Unauthorized");
    }

    const authorization = headers.authorization;

    if (!authorization) {
      return callback("Unauthorized");
    }

    const encoded = authorization.split(" ")[1];
    const decoded = Buffer.from(encoded, "base64").toString("utf-8");
    const [username, password] = decoded.split(":");

    const effect =
      username === process.env.username && password === process.env.password
        ? "Allow"
        : "Deny";

    return generateResponse(username, effect, event.routeArn);
  } catch (error) {
    console.log(error);
  }
};

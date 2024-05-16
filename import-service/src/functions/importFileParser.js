import { GetObjectCommand } from "@aws-sdk/client-s3";
import { s3client } from "../libs/s3client";
import csvParser from "csv-parser";
import { get } from "lodash";

export const importFileParser = async (event) => {
  try {
    console.log("Received event:", JSON.stringify(event, null, 2));

    const { Records } = event;
    if (!Records) {
      throw new Error("No records found in the event");
    }

    const name = get(Records, "[0].s3.bucket.name");
    const key = get(Records, "[0].s3.object.key");

    if (!name || !key) {
      throw new Error("No name or key found in the event");
    }

    const s3Params = {
      Bucket: name,
      Key: key,
    };

    const s3Stream = s3client
      .send(new GetObjectCommand(s3Params))
      .createReadStream();
    const parsedData = [];
    s3Stream
      .pipe(csvParser())
      .on("data", (data) => parsedData.push(data))
      .on("end", () => {
        console.log(parsedData);
      });
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "File parsed" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};

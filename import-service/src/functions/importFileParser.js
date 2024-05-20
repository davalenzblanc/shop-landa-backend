import { GetObjectCommand } from "@aws-sdk/client-s3";
import { s3client } from "../clientS3.js";
import csvParser from "csv-parser";
import { sendMessageToQueue } from "../helpers/sendMessage.js";

export const importFileParser = async (event) => {
  try {
    console.log("Received event:", JSON.stringify(event, null, 2));

    const { Records } = event;
    if (!Records) {
      throw new Error("No records found in the event");
    }

    if (
      !Records ||
      !Records[0] ||
      !Records[0].s3 ||
      !Records[0].s3.bucket ||
      !Records[0].s3.object
    ) {
      throw new Error("Invalid event structure");
    }

    const name = Records[0].s3.bucket.name;
    const key = Records[0].s3.object.key;

    if (!name || !key) {
      throw new Error("No name or key found in the event");
    }

    const s3Params = {
      Bucket: name,
      Key: key,
    };

    const s3Stream = await s3client
      .send(new GetObjectCommand(s3Params))
      .createReadStream();

    const parsedData = [];
    s3Stream
      .pipe(csvParser())
      .on("data", async (data) => {
        parsedData.push(data);
        await sendMessageToQueue(data);
      })
      .on("end", () => {
        console.log(parsedData);
      });
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ message: "File parsed" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};

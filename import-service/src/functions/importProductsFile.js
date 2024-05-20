import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3client } from "../clientS3.js";

const bucket = process.env.BUCKET_NAME;

export const importProductsFile = async (event) => {
  try {
    const { queryStringParameters } = event;
    const { name } = queryStringParameters;

    if (!name) {
      throw new Error("File name must be provided");
    }

    const catalogPath = `uploaded/${name}`;
    const command = new PutObjectCommand({
      Bucket: bucket,
      Key: catalogPath,
    });

    const signedUrl = await getSignedUrl(s3client, command, {
      expiresIn: 3600,
    });

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({ data: signedUrl }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({ message: error.message }),
    };
  }
};

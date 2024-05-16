import { S3 } from "aws-sdk";
import { s3client } from "../libs/s3client";
import { PutObjectCommand } from "@aws-sdk/client-s3";

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

    const signedUrl = await S3.getSignedUrl(s3client, command, {
      expiresIn: 3600,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ data: signedUrl }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};

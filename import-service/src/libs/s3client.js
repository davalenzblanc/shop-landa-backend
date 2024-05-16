import { S3Client } from "@aws-sdk/client-s3";

const region = process.env.REGION;

export const s3client = new S3Client({ region });

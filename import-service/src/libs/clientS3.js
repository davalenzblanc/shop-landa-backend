import { S3Client } from "@aws-sdk/client-s3";

const region = process.env.REGION;

export const clientS3 = new S3Client({ region });

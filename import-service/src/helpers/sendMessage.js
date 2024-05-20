import { SendMessageCommand } from "@aws-sdk/client-sqs";
import { sqsClient } from "../sqsClient.js";

export const sendMessageToQueue = async (message) => {
  try {
    const command = new SendMessageCommand({
      QueueUrl: process.env.QUEUE_URL,
      MessageBody: JSON.stringify(message),
      DelaySeconds: 0,
    });

    console.log(command, "command");

    const result = await sqsClient.send(command);
    console.log(result, "result");

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message sent" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};

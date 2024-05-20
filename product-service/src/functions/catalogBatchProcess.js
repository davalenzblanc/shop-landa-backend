import AWS from "aws-sdk";

const sns = new AWS.SNS();

const snsTopicArn = process.env.SNS_TOPIC_ARN;

async function processMessage(message) {
  try {
    console.log(`Processing message ${message.body}`);
    const newProduct = JSON.parse(message.body);
    await sns
      .publish({
        TopicArn: snsTopicArn,
        Subject: "New product added",
        Message: JSON.stringify(newProduct),
      })
      .promise();
  } catch (error) {
    console.error("Error processing message", error);
    throw error;
  }
}

export const catalogBatchProcessHandler = async (event, context) => {
  for (const record of event.Records) {
    await processMessage(record);
  }
  console.ingo("Messages processed successfully");
};

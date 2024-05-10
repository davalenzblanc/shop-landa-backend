import AWS from "aws-sdk";
import { formatJSONResponse } from "../utils";

const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = "shop-products";

export const getProductsListHandler = async () => {
  try {
    const productsList = await dynamodb
      .scan({
        TableName: tableName,
      })
      .promise();
    return formatJSONResponse(productsList.Items);
  } catch (error) {
    return formatJSONResponse(
      {
        message: error.message,
      },
      500
    );
  }
};

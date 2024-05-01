import AWS from "aws-sdk";
import { formatJSONResponse } from "../utils";

const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = "shop-products";

export const createProductHandler = async (event) => {
  try {
    const product = JSON.parse(event.body);
    const newProduct = {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      count: product.count,
    };
    await dynamodb
      .put({
        TableName: tableName,
        Item: newProduct,
      })
      .promise();
    return formatJSONResponse(newProduct, 201);
  } catch (error) {
    return formatJSONResponse(
      {
        message: error.message,
      },
      500
    );
  }
};

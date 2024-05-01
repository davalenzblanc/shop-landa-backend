import AWS from "aws-sdk";
import { formatJSONResponse } from "../utils";
import { randomUUID } from "crypto";

const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = "shop-products";

export const createProductHandler = async (event) => {
  try {
    const product = JSON.parse(event.body);

    // validate product
    if (!product.title || !product.description || !product.price) {
      return formatJSONResponse(
        {
          message: "Product is not valid",
        },
        400
      );
    }

    const newProduct = {
      id: randomUUID(),
      title: product.title,
      description: product.description,
      price: product.price,
      image: product.image,
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

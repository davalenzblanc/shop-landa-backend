import AWS from "aws-sdk";
import { formatJSONResponse } from "../utils";
import { randomUUID } from "crypto";

const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = "shop-products";
const stockTableName = "shop-stock";

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

    const newProductId = randomUUID();

    const newProductParams = {
      tableName: tableName,
      Item: {
        id: newProductId,
        title: product.title,
        description: product.description,
        price: product.price,
      },
    };

    const newStockParams = {
      tableName: stockTableName,
      Item: {
        productId: newProductId,
        count: product.count || 0,
      },
    };

    await dynamodb.batchWrite({
      RequestItems: {
        [tableName]: [
          {
            PutRequest: {
              Item: newProductParams.Item,
            },
          },
        ],
        [stockTableName]: [
          {
            PutRequest: {
              Item: newStockParams.Item,
            },
          },
        ],
      },
    });

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

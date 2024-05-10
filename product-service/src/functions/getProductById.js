import AWS from "aws-sdk";
import { formatJSONResponse } from "../utils";

const dynamodb = new AWS.DynamoDB();
const tableName = "shop-products";

export const getProductByIdHandler = async (event) => {
  try {
    const { productId } = event.pathParameters;

    const params = {
      TableName: tableName,
      Key: {
        id: { S: productId },
      },
    };

    const productData = await dynamodb.getItem(params).promise();

    if (!productData.Item) {
      return formatJSONResponse(
        {
          message: "Product not found",
        },
        404
      );
    }

    const product = {
      id: productData.Item.id.S,
      title: productData.Item.title.S,
      description: productData.Item.description.S,
      price: productData.Item.price.N,
    };

    return formatJSONResponse(product);
  } catch (error) {
    return formatJSONResponse(
      {
        message: error.message,
      },
      500
    );
  }
};

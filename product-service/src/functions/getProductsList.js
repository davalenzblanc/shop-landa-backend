import AWS from "aws-sdk";
import { formatJSONResponse } from "../utils";

const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = "shop-products";

const scanStocksTable = async () => {
  try {
    const stocks = await dynamodb
      .scan({
        TableName: "shop-stocks",
      })
      .promise();
    return stocks.Items;
  } catch (error) {
    return formatJSONResponse(
      {
        message: error.message,
      },
      500
    );
  }
};

export const getProductsListHandler = async () => {
  try {
    const productsList = await dynamodb
      .scan({
        TableName: tableName,
      })
      .promise();

    const stocks = await scanStocksTable();

    productsList.Items.forEach((product) => {
      const stock = stocks.find((stock) => stock.productId === product.id);
      product.count = stock ? stock.count : 0;
    });

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

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';
import products from '../mock.json';

const getProductsById: ValidatedEventAPIGatewayProxyEvent<
  typeof schema
> = async (event) => {
  const { productId } = event.pathParameters;
  const product = products.find(({ id }) => id === productId);

  if (!product) {
    return formatJSONResponse({
      message: 'Product not found',
      statusCode: 404,
      event,
    });
  }

  return formatJSONResponse({
    data: product,
    event,
  });
};

export const main = middyfy(getProductsById);

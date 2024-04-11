import { formatJSONResponse } from '../utils';
import { products } from '../mocks/products';

export const getProductsListHandler = async () => {
  try {
    return formatJSONResponse({
      products,
    });
  } catch (error) {
    return formatJSONResponse(
      {
        message: error.message,
      },
      500
    );
  }
};

import { formatJSONResponse } from '../utils';
import { products } from '../mocks/products';

export const getProductByIdHandler = async (event) => {
  try {
    const { productId } = event.pathParameters;
    const product = products.find((product) => product.id === productId);
    if (!product) {
      return formatJSONResponse(
        {
          message: 'Product not found',
        },
        404
      );
    }
    return formatJSONResponse({
      product,
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

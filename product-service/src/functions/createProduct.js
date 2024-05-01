export const createProductHandler = async (event) => {
  // Parse the request body from the event object
  const product = JSON.parse(event.body);

  // Add the product to the products array
  products.push(product);

  // Return a 201 status code and the product in the response body
  return formatJSONResponse(product, 201);
};

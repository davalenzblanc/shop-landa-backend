import schema from './schema';
import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'products',
        request: {
          schemas: {
            'application/json': schema,
          },
        },
        responses: {
          '200': {
            description: 'Products were found',
            bodyType: 'ProductList',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ProductsList',
                },
              },
            },
          },
        },
      },
    },
  ],
};

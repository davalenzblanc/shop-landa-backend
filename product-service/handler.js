"use strict";

import {
  getProductsListHandler,
  getProductByIdHandler,
  createProductHandler,
} from "./src/functions";

export const getProductsList = getProductsListHandler;
export const getProductById = getProductByIdHandler;
export const createProduct = createProductHandler;

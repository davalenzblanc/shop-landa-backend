"use strict";

import {
  getProductsListHandler,
  getProductByIdHandler,
  createProductHandler,
  catalogBatchProcessHandler,
} from "./src/functions";

export const getProductsList = getProductsListHandler;
export const getProductById = getProductByIdHandler;
export const createProduct = createProductHandler;
export const catalogBatchProcess = catalogBatchProcessHandler;

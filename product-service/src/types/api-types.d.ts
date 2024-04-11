// api types
export interface Product {
  count: number;
  description: string;
  id: string;
  price: number;
  title: string;
}
export interface Error {
  message: string;
}
export interface ProductList {
  data: Product[];
}
export interface ProductById {
  data: Product;
}

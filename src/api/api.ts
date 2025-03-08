import axios from "axios";
import { CommentType } from "../types/CommentType";
import { ProductType } from "../types/ProductType";

const BASE_URL_PRODUCTS = "http://localhost:5000/products";
const BASE_URL_COMMENTS = "http://localhost:5000/comments";

export const fetchProducts = async () => {
  const response = await axios.get<ProductType[]>(BASE_URL_PRODUCTS);
  return response.data;
};

export const getOneProduct = async (productId: string) => {
  const response = await axios.get<ProductType>(
    `${BASE_URL_PRODUCTS}/${productId}`
  );

  return response.data;
};

export const postProduct = async (newProduct: Omit<ProductType, "id">) => {
  const response = await axios.post<ProductType>(BASE_URL_PRODUCTS, newProduct);
  return response.data;
};

export const deleteProduct = async (productId: string) => {
  const response = await axios.delete(`${BASE_URL_PRODUCTS}/${productId}`);
  return response.data;
};

export const updateProduct = async (updatedProduct: ProductType) => {
  const { id } = updatedProduct;
  const response = await axios.patch<ProductType>(
    `${BASE_URL_PRODUCTS}/${id}`,
    updatedProduct
  );
  return response.data;
};

export const fetchComments = async (productId: string) => {
  const response = await axios.get<CommentType[]>(
    `${BASE_URL_COMMENTS}?productId=${productId}`
  );

  return response.data;
};

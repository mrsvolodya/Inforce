import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  deleteProduct,
  fetchProducts,
  getOneProduct,
  postProduct,
  updateProduct,
} from "../../api/api";
import { SortEnum } from "../../enums/SortEnum";
import { ProductType } from "../../types/ProductType";
import { SortType } from "../../types/SortType";

interface ProductsState {
  products: ProductType[];
  sortType: SortType;
  selectedProduct: ProductType | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  sortType: SortEnum.alphabetical,
  selectedProduct: null,
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<ProductType[]>) {
      state.products = action.payload;
    },
    setSortType(state, action: PayloadAction<SortType>) {
      state.sortType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Can not find products";
      })
      .addCase(addProductThunk.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(removeProductThunk.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      })
      .addCase(getOneProductThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOneProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Product not found";
      })
      .addCase(getOneProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(updateProductThunk.fulfilled, (state, action) => {
        state.products = state.products.map((product) => {
          if (product.id === action.payload.id) {
            return action.payload;
          } else {
            return product;
          }
        });
      });
  },
});

export default productsSlice.reducer;

export const { setProducts, setSortType } = productsSlice.actions;

export const fetchProductsThunk = createAsyncThunk(
  "products/fetchProducts",
  fetchProducts
);
export const addProductThunk = createAsyncThunk(
  "products/addProduct",
  postProduct
);

export const removeProductThunk = createAsyncThunk(
  "products/deleteProduct",
  deleteProduct
);

export const getOneProductThunk = createAsyncThunk(
  "products/getOneProduct",
  getOneProduct
);

export const updateProductThunk = createAsyncThunk(
  "product/updateProduct",
  updateProduct
);

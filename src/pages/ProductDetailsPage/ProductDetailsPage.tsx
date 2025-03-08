import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AddProductForm from "../../components/AppProductForm/AppProductForm";
import CommentList from "../../components/CommentsList/CommentList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { useAppDispatch, useAppSelector } from "../../hooks/helpersRedux";
import { fetchCommentsThunk } from "../../store/slices/commentsSlice";
import { getOneProductThunk } from "../../store/slices/productsSlice";

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { selectedProduct } = useAppSelector((state) => state.products);
  const { isEditForm } = useAppSelector((state) => state.form);

  useEffect(() => {
    if (id) {
      dispatch(getOneProductThunk(id));
      dispatch(fetchCommentsThunk(id));
    }
  }, [dispatch, id]);

  if (!selectedProduct) return <p className="text-white">Product not found</p>;

  return (
    <div className="container mx-auto px-4 relative">
      <h1 className="text-3xl font-bold text-white my-6">Product details</h1>

      <div className="w-full flex justify-center">
        {isEditForm && <AddProductForm productToEdit={selectedProduct} />}
      </div>

      <ProductItem product={selectedProduct} />

      <CommentList />
      <Link
        to="../"
        className="bg-amber-600 p-3 mt-8 block text-center font-bold rounded-3xl"
      >
        Back to list
      </Link>
    </div>
  );
};

export default ProductDetailsPage;

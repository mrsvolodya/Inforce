import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/helpersRedux";
import { fetchProductsThunk } from "../../store/slices/productsSlice";
import { sortProducts } from "../../utils/sortProducts";
import Dropdown from "../Dropdown/Dropdown";
import ProductItem from "../ProductItem/ProductItem";

const ProductList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { products, sortType, loading, error } = useAppSelector(
    (state) => state.products
  );

  const sortedProduct = sortProducts(products, sortType);

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto px-4 mb-10">
      <div className="flex items-center flex-col justify-between mb-14 lg:flex-row">
        <h1 className="text-3xl font-bold text-center text-white my-6">
          Product List
        </h1>
        <Dropdown />
      </div>

      <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
        {sortedProduct.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

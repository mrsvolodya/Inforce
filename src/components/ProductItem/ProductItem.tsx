import { Link, useParams } from "react-router-dom";
import { ProductType } from "../../types/ProductType";
import ShowMoreDetails from "../ShowMoreDetails/ShowMoreDetails";
import ActionButtonsDetails from "./ProductActionButtons/ProductActionButtons";

type ProductItemProps = {
  product: ProductType;
};

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const { id } = useParams();

  return (
    <li className="bg-neutral-600 p-4 rounded-lg text-center">
      <Link to={`/products/${product.id}`} key={product.id}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-40 object-cover rounded-md"
        />
        <p className="text-lg font-semibold text-black mt-2">{product.name}</p>
        <p className="text-gray-900">{product.count} ps.</p>

        {id && <ShowMoreDetails product={product} />}
      </Link>
      <ActionButtonsDetails product={product} />
    </li>
  );
};

export default ProductItem;

import { ProductType } from "../../types/ProductType";

type ShowMoreDetailsProps = {
  product: ProductType;
};

const ShowMoreDetails: React.FC<ShowMoreDetailsProps> = ({ product }) => {
  return (
    <div className="flex flex-col p-2 text-black">
      <div className="flex gap-2 justify-center">
        <p>Size:</p>
        <span>Width: {product.size.width} sm</span>
        <span>Height: {product.size.height} sm</span>
      </div>
      <div className="flex gap-2 justify-center">
        <p>Weight:</p>
        <span> {product.weight} </span>
      </div>
    </div>
  );
};

export default ShowMoreDetails;

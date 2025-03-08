import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/helpersRedux";
import { setIsEditForm, setIsFormOpen } from "../../../store/slices/formSlice";
import { removeProductThunk } from "../../../store/slices/productsSlice";
import { ProductType } from "../../../types/ProductType";

type ProductActionButtonsProps = {
  product: ProductType;
};

const ProductActionButtons: React.FC<ProductActionButtonsProps> = ({
  product,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDelete = (productId: string) => {
    if (id) {
      navigate(-1);
    }
    dispatch(removeProductThunk(productId));
  };
  return (
    <div className="w-full flex justify-center gap-4">
      <button
        onClick={() => handleDelete(product.id)}
        className="flex justify-center pointer bg-red-600 py-1 px-16 rounded-lg cursor-pointer mt-2"
      >
        Delete
      </button>
      {id && (
        <button
          onClick={() => {
            dispatch(setIsEditForm(true));
            dispatch(setIsFormOpen(true));
          }}
          className="pointer bg-amber-600 py-1 px-16 rounded-lg cursor-pointer mt-2 z-10"
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default ProductActionButtons;

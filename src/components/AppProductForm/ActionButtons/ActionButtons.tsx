import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../hooks/helpersRedux";
import { setIsEditForm, setIsFormOpen } from "../../../store/slices/formSlice";
import { ProductFormInputType } from "../../../types/ProductFormInputType";

const ActionButtons = () => {
  const dispatch = useAppDispatch();
  const { reset } = useForm<ProductFormInputType>();
  const handleOnCancel = () => {
    dispatch(setIsFormOpen(false));
    dispatch(setIsEditForm(false));
    reset();
  };
  return (
    <div className="flex justify-between">
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-20 cursor-pointer"
      >
        Add
      </button>
      <button
        type="button"
        onClick={handleOnCancel}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-20 cursor-pointer"
      >
        Cancel
      </button>
    </div>
  );
};

export default ActionButtons;

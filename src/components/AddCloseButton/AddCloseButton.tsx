import { useAppDispatch, useAppSelector } from "../../hooks/helpersRedux";
import { setIsFormOpen } from "../../store/slices/formSlice";

const AddCloseButton = () => {
  const dispatch = useAppDispatch();
  const { isFormOpen } = useAppSelector((state) => state.form);

  return (
    <button
      onClick={() => dispatch(setIsFormOpen(!isFormOpen))}
      className="bg-green-500 px-3 py-2 flex justify-center cursor-pointer rounded-2xl w-50 font-medium"
    >
      {isFormOpen ? "Close Form" : "Add Product"}
    </button>
  );
};

export default AddCloseButton;

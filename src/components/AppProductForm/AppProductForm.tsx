import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../hooks/helpersRedux";
import {
  addProductThunk,
  updateProductThunk,
} from "../../store/slices/productsSlice";
import { ProductFormInputType } from "../../types/ProductFormInputType";
import { ProductType } from "../../types/ProductType";
import ActionButtons from "./ActionButtons/ActionButtons";

type AppEditFormProps = {
  productToEdit?: ProductType;
};

const AddProductForm: React.FC<AppEditFormProps> = ({ productToEdit }) => {
  const dispatch = useAppDispatch();
  const { size, ...restProducts } = productToEdit || {};
  const defaultValues = {
    ...restProducts,
    height: size?.height ?? 0,
    width: size?.width ?? 0,
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormInputType>({ defaultValues });

  const onSubmit = (data: ProductFormInputType) => {
    const newProduct = {
      imageUrl: data.imageUrl,
      name: data.name,
      count: Number(data.count),
      size: { width: Number(data.width), height: Number(data.height) },
      weight: data.weight,
      comments: [],
    };

    if (productToEdit) {
      dispatch(updateProductThunk({ id: productToEdit.id, ...newProduct }));
    } else {
      dispatch(addProductThunk(newProduct));
    }

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-between bg-gray-800 p-6 rounded-lg shadow-md text-white max-w-lg mx-auto my-6 h-[650px] absolute z-100"
    >
      <h2 className="text-2xl font-bold mb-4">Add product</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium">Image url</label>
        <input
          {...register("imageUrl", { required: "This field is important" })}
          className="w-full p-2 rounded bg-gray-700 border border-gray-600"
        />
        {errors.imageUrl && (
          <p className="text-red-500">{errors.imageUrl.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Product name</label>
        <input
          {...register("name", { required: "This field is important" })}
          className="w-full p-2 rounded bg-gray-700 border border-gray-600"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Quantity</label>
        <input
          type="number"
          {...register("count", {
            required: "This field is important",
            min: 1,
          })}
          className="w-full p-2 rounded bg-gray-700 border border-gray-600"
        />
        {errors.count && <p className="text-red-500">{errors.count.message}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-sm font-medium">Width (px)</label>
          <input
            type="number"
            {...register("width", {
              required: "This field is important",
              min: 10,
            })}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          />
          {errors.width && (
            <p className="text-red-500">{errors.width.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Height (px)</label>
          <input
            type="number"
            {...register("height", {
              required: "This field is important",
              min: 10,
            })}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          />
          {errors.height && (
            <p className="text-red-500">{errors.height.message}</p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Weight</label>
        <input
          {...register("weight", { required: "This field is important" })}
          className="w-full p-2 rounded bg-gray-700 border border-gray-600"
        />
        {errors.weight && (
          <p className="text-red-500">{errors.weight.message}</p>
        )}
      </div>

      <ActionButtons />
    </form>
  );
};

export default AddProductForm;

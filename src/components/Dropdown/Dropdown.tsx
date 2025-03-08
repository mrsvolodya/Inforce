import { useState } from "react";
import { DEFAULT_OPTIONS } from "../../constants/DEFAULT_OPTIONS";
import { useAppDispatch, useAppSelector } from "../../hooks/helpersRedux";
import { setSortType } from "../../store/slices/productsSlice";
import { SortType } from "../../types/SortType";
import { sortByTitle } from "../../utils/sortByTitle";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { sortType } = useAppSelector((state) => state.products);

  const handleOnSelect = (value: SortType) => {
    dispatch(setSortType(value));
    setIsOpen(false);
  };

  const currentOption = sortByTitle(sortType);

  return (
    <div className="relative inline-block w-48  ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-gray-800 rounded-md flex justify-between items-center py-2 px-4 cursor-pointer"
      >
        {currentOption}
        {!isOpen ? <span>▼</span> : <span>▲</span>}
      </button>

      {isOpen && (
        <ul className="absolute left-0 mt-2 w-full shadow-lg">
          {DEFAULT_OPTIONS.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOnSelect(option.value)}
              className="cursor-pointer px-3 hover:bg-gray-700 py-1"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

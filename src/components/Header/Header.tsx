import AddCloseButton from "../AddCloseButton/AddCloseButton";

const Header = () => {
  return (
    <header className="my-4 text-3xl font-bold flex">
      <div className="mx-auto">
        <AddCloseButton />
      </div>
    </header>
  );
};

export default Header;

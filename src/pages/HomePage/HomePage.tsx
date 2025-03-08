import Header from "../../components/Header/Header";
import { useAppSelector } from "../../hooks/helpersRedux";
import ProductList from "../../components/ProductList/ProductList";
import AddProductForm from "../../components/AppProductForm/AppProductForm";

function HomePage() {
  const { isFormOpen } = useAppSelector((state) => state.form);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex justify-center bg-gray-900">
        {isFormOpen && <AddProductForm />}
        <ProductList />
      </main>
      <footer className="my-4 text-3xl font-bold flex">
        <p className="text-blue-500 mx-auto">Footer</p>
      </footer>
    </div>
  );
}

export default HomePage;

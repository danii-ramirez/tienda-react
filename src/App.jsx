import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailsContainer from "./components/ItemDetailsContainer";
import { CartContextProvider } from "./context/cartContext";
import Cart from "./components/Cart";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailsContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h1>URL invalida</h1>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

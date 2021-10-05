import ProductList from "./components/productList/index";
import { CatalogueProvider } from "./providers/catalogue";
import { CartProvider } from "./providers/cart";
import { ChakraProvider } from "@chakra-ui/react";
import PopoverContainer from "./components/popover";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ChakraProvider>
          <CatalogueProvider>
            <CartProvider>
              <ProductList type="catalogue" />
              <PopoverContainer content={<ProductList type="cart" />} />
            </CartProvider>
          </CatalogueProvider>
        </ChakraProvider>
      </header>
    </div>
  );
}

export default App;

import Button from "../button";

import { useContext } from "react";

import { CartContext } from "../../providers/cart";
import { CatalogueContext } from "../../providers/catalogue";

import { Container, List,  } from "./style";

const ProductList = ({ type }) => {
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);

  return (
    <Container>
      {type === "catalogue" &&
        catalogue.map((item, index) => (
          <List key={index}>
            <div>
              <h3>{item.name}</h3>
              <h1>R$ {item.price}</h1>
              <Button type={type} item={item} />
            </div>
          </List>
        ))}

      {type === "cart" &&
        cart.map((item, index) => (
          <List key={index}>
            <div>
              <h3>{item.name}</h3>
              <h1>R$ {item.price}</h1>
              <Button type={type} item={item} />
            </div>
          </List>
        ))}
    </Container>
  );
};

export default ProductList;

import React from "react";
import { Container, Row } from "react-bootstrap";
import SwapShop from "./SwapShop";
import Search from "./Search";

function SwapShopList({
  swapShop,
  setSwapShop,
  search,
  setter,
  catSearch,
  catSetter,
  priceSearch,
  priceSetter,
}) {
  const filteredSearch = swapShop
    .filter((shop) => shop.item.toLowerCase().includes(search.toLowerCase()))
    .filter((shop) =>
      shop.catagory.toLowerCase().includes(catSearch.toLowerCase())
    )

    .filter((shop) =>
      shop.catagory.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <>
      <h2>Swap/Shop</h2>
      <Container>
        <Search
          search={search}
          setter={setter}
          catSearch={catSearch}
          catSetter={catSetter}
          priceSearch={priceSearch}
          priceSetter={priceSetter}
        />
      </Container>
      <br />
      <Container>
        <Row>
          {filteredSearch.map((shop) => (
            <SwapShop
              key={shop.id}
              id={shop.id}
              name={shop.item}
              image={shop.image}
              price={shop.price}
              description={shop.description}
              catagory={shop.catagory}
            />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default SwapShopList;

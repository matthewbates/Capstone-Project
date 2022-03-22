import React from "react";
import { Container, Row } from "react-bootstrap";
import SwapShop from "./SwapShop";
import Search from "./Searches/SwapSearch";

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
      shop.item.toLowerCase().includes(priceSearch.toLowerCase())
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
              image_one={shop.image_one}
              image_two={shop.image_two}
              image_three={shop.image_three}
              price={shop.price}
              description={shop.description}
              category={shop.catagory}
            />
          ))}
        </Row>
      </Container>
      <Container style={{ width: "4rem", height: "4rem" }}></Container>
    </>
  );
}

export default SwapShopList;

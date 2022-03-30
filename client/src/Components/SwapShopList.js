import React, { Fragment } from "react";
import { Container, Row } from "react-bootstrap";
import SwapShop from "./SwapShop";
import Search from "./Searches/SwapSearch";
import { MDBRow, MDBContainer } from "mdb-react-ui-kit";

function SwapShopList({
  swapShop,
  setSwapShop,
  search,
  setter,
  catSearch,
  catSetter,
  priceSearch,
  priceSetter,
  category,
})

{
  const filteredSearch = swapShop
    .filter((shop) => shop.item.toLowerCase().includes(search.toLowerCase()))
    .filter((shop) =>
      shop.catagory.toLowerCase().includes(catSearch.toLowerCase())
    )
    .filter((shop) => {
      if (priceSearch) {
        const price = shop.price;
        // Number changes string into an integer
        const bottomRange = Number(priceSearch.split("-")[0]);
        const topRange = Number(priceSearch.split("-")[1]);
        return (
          // returns true/false if BOTH statements are true
          bottomRange < price && topRange > price
        );
      } else {
        return true;
      }
    });

  return (
    <div className="body-of-swap-shop">
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
      <MDBContainer>
        <MDBRow className="row-cols-1 row-cols-lg-4 row-cols-md-3 g-2">
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
        </MDBRow>
      </MDBContainer>
      <Container style={{ width: "4rem", height: "4rem" }}></Container>
    </div>
  );
}

export default SwapShopList;

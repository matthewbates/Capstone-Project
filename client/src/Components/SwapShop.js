import React from "react";
import { Container, Card, Button } from "react-bootstrap";

function SwapShop({ swapShop, setSwapShop }) {
  console.log(swapShop);
  return (
    <>
      <h1>Welcome To Swap/Shop!</h1>
      {swapShop.map((shop) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={shop.image} />
          <Card.Body>
            <Card.Title>{shop.item}</Card.Title>
            <Card.Subtitle>${shop.price}</Card.Subtitle>
            <Card.Text>{shop.description}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

//  <Card key={shop.id}>
//       <h3>{shop.item}</h3>
//       <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={shop.image} alt={shop.item}></Card.Img>
//     </Card>
export default SwapShop;

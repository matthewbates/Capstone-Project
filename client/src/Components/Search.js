import React, { useState } from "react";
import { Container, Col, DropdownButton, Dropdown } from "react-bootstrap";

function Search({
  search,
  setter,
  catSearch,
  catSetter,
  priceSearch,
  priceSetter,
}) {
  function renderSwapShopSearch(event) {
    setter(event.target.value);
  }

  function handleCatagorySelect(event) {
    catSetter(event);
  }

  function handlePriceSelect(event) {
    priceSetter(event.target.value);
  }

  return (
    <Container>
      <div className="input-grou- pt-5 col-8">
        <input
          type="text"
          className="form-control-rounded"
          arial-label="Search"
          aria-describedby="search-addon"
          value={search}
          placeholder="Search for an item"
          onChange={renderSwapShopSearch}
        />
        <Col>
          <DropdownButton
            id="dropdown-basic-button"
            title="Search By Catagory"
            onSelect={handleCatagorySelect}
          >
            <Dropdown.Item eventKey="Clothing">Clothing</Dropdown.Item>
            <Dropdown.Item eventKey="Shelter">Shelter</Dropdown.Item>
            <Dropdown.Item eventKey="Footwear">Footwear</Dropdown.Item>
          </DropdownButton>
          <DropdownButton
            id="dropdown-basic-button"
            title="Search By Price"
            value={priceSearch}
            onChange={handlePriceSelect}
          >
            {/* GET SEARCH BY PRICE TO WORK */}
            <Dropdown.Item eventKey="80">80</Dropdown.Item>
            <Dropdown.Item eventKey="51-100">51-100</Dropdown.Item>
            <Dropdown.Item eventKey="101-200">101-200</Dropdown.Item>
            <Dropdown.Item eventKey="201+">201+</Dropdown.Item>
          </DropdownButton>
        </Col>
      </div>
    </Container>
  );
}

export default Search;

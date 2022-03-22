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
  function renderSwapShopSearch(e) {
    setter(e.target.value);
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
          placeholder="Search By Item"
          onChange={renderSwapShopSearch}
        />
        <Col>
          <DropdownButton
            id="dropdown-basic-button"
            title="Search By Catagory"
            onSelect={handleCatagorySelect}
          >
            <Dropdown.Item eventKey="Clothing & Footwear">
              Clothing & Footwear
            </Dropdown.Item>
            <Dropdown.Item eventKey="Shelters">Shelters</Dropdown.Item>
            <Dropdown.Item eventKey="Backpacks">Backpacks</Dropdown.Item>
            <Dropdown.Item eventKey="Other">Other</Dropdown.Item>
            <Dropdown.Item eventKey="Cook Systems">Cook Systems</Dropdown.Item>
            <Dropdown.Item eventKey="Sleep Systems">
              Sleep Systems
            </Dropdown.Item>
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

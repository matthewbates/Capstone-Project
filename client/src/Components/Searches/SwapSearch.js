import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  DropdownButton,
  Dropdown,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";

function Search({
  search,
  setter,
  catSearch,
  catSetter,
  priceSearch,
  priceSetter,
}) {
  function renderSwapShopSearch(e) {
    e.preventDefault();
    setter(e.target.value);
  }

  function handleCatagorySelect(event) {
    catSetter(event);
    console.log(event);
  }

  function handlePriceSelect(priceRange) {
    priceSetter(priceRange);
  }

  return (
    <Container>
      <div className="input-group pt-5 col-2">
        <input
          type="text"
          className="form-control-rounded"
          arial-label="Search"
          aria-describedby="search-addon"
          value={search}
          placeholder="Search By Item"
          onChange={renderSwapShopSearch}
        ></input>{" "}
        <DropdownButton
          title={catSearch == "" ? "All Categories" : catSearch}
          placeholder="search"
          onSelect={handleCatagorySelect}
        >
          <Dropdown.Item eventKey="">All Categories</Dropdown.Item>
          <Dropdown.Item eventKey="Clothing & Footwear">
            Clothing & Footwear
          </Dropdown.Item>
          <Dropdown.Item eventKey="Shelters">Shelters</Dropdown.Item>
          <Dropdown.Item eventKey="Backpacks">Backpacks</Dropdown.Item>
          <Dropdown.Item eventKey="Other">Other</Dropdown.Item>
          <Dropdown.Item eventKey="Cook Systems">Cook Systems</Dropdown.Item>
          <Dropdown.Item eventKey="Sleep Systems">Sleep Systems</Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          id="dropdown-basic-button"
          title="Search By Price"
          onSelect={handlePriceSelect}
        >
          {/* GET SEARCH BY PRICE TO WORK */}
          <Dropdown.Item eventKey="">Any</Dropdown.Item>
          <Dropdown.Item eventKey="0-50">0-50</Dropdown.Item>
          <Dropdown.Item eventKey="51-100">51-100</Dropdown.Item>
          <Dropdown.Item eventKey="101-200">101-200</Dropdown.Item>
          <Dropdown.Item eventKey="201-400">201-400</Dropdown.Item>
        </DropdownButton>{" "}
      </div>
    </Container>
  );
}

export default Search;

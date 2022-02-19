import React, { useState } from "react";
import { Button, Dropdown, ButtonGroup, Row, Col, Modal } from "react-bootstrap";
import "../App.css";
import { setGlobalState, useGlobalState } from "../state";
import * as Icon from "react-bootstrap-icons";

export default function ProductPage(props) {
  let [sizeSelection, setSizeSelection] = useState("");
  let [typeSelection, setTypeSelection] = useState("Barbeque");
  let [wishlisted, setWishlisted] = useState(false);
  let [addedToCart, setAddedToCart] = useState(false);
  let [showWishlist, setShowWishlist] = useState(false);

  function handleSize() {
    setGlobalState("productName", sizeSelection);
  }

  function PriceSegment() {
    if (props.menuItem.discountPrice != null) {
      return (
        <div>
          <div style={{ display: "flex" }}>
            <p style={{ color: "gray", textDecoration: "line-through" }}>
              ₱{props.menuItem.price}
            </p>
            <p style={{ color: "red", marginLeft: 5 }}>
              ({props.menuItem.discount}% off)
            </p>
          </div>
          <h1>₱{props.menuItem.discountPrice}</h1>
        </div>
      );
    } else {
      return <h3>{props.menuItem.price}</h3>;
    }
  }

  function SizeButtons() {
    function toggleInactive() {
      const regular = document.getElementById("regularButton");
      const medium = document.getElementById("mediumButton");
      const large = document.getElementById("largeButton");
      regular.classList.remove("sizeButtonSelected");
      medium.classList.remove("sizeButtonSelected");
      large.classList.remove("sizeButtonSelected");
    }
    function toggleActive(id) {
      const currentButton = document.getElementById(id);
      currentButton.classList.add("sizeButtonSelected");
      
    }

    return (
      <div>
        <button
          id="regularButton"
          onClick={function () {
            toggleInactive();
            toggleActive("regularButton");
            setSizeSelection("Regular");
            handleSize();
            console.log(sizeSelection);
            setGlobalState('size', sizeSelection)
          }}
          type="button"
          class="btn btn-lg sizeButton"
        >
          Regular
        </button>
        <button
          id="mediumButton"
          onClick={function () {
            toggleInactive();
            toggleActive("mediumButton");
            setSizeSelection("Medium");
            handleSize();
            console.log(sizeSelection);
            setGlobalState('size', sizeSelection)
          }}
          type="button"
          class="btn btn-lg sizeButton"
        >
          Medium
        </button>
        <button
          id="largeButton"
          onClick={function () {
            toggleInactive();
            toggleActive("largeButton");
            setSizeSelection("Large");
            handleSize();
            console.log(sizeSelection);
            setGlobalState('size', sizeSelection)
          }}
          type="button"
          class="btn btn-lg sizeButton"
        >
          Large
        </button>
      </div>
    );
  }

  function DropdownMenu() {
    const handleSelect = (e) => {
      setTypeSelection(e);
      console.log(e);
      setGlobalState('type', e)
    };

    return (
      <Dropdown
        id="dropdown"
        align="end"
        as={ButtonGroup}
        onSelect={handleSelect}
      >
        <Button id="dropdown-selection">{typeSelection}</Button>
        <Dropdown.Toggle split variant="light" className="dropdown-button" />

        <Dropdown.Menu>
          {props.menuItem.flavors.map((e) => (
            <Dropdown.Item eventKey={e} className="dropDownItem">
              {e}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  function OrderButtons() {
    function wishlistButton() {
      if (wishlisted === false) {
        return <button
          id="wishlistButton"
          onClick={function () {setWishlisted(!wishlisted); setShowWishlist(true)}}
          type="button"
          class="btn btn-lg selectionButton"
        ><Icon.HeartFill color="#0ca8ac"/> Add to Wishlist</button>
      } else {return <button
        id="wishlistButton"
        onClick={function () {setWishlisted(!wishlisted)}}
        type="button"
        class="btn btn-lg activeSelectionButton"
      ><Icon.HeartFill color="white"/> On Wishlist</button>} 
    }
    function cartButton() {
      if (addedToCart === false) {
        return <button
          id="cartButton"
          onClick={function () {setAddedToCart(!addedToCart); setAddedToCart(true)}}
          type="button"
          class="btn btn-lg selectionButton"
        ><Icon.CartFill color="#0ca8ac"/> Add to Cart</button>
      } else {return <button
        id="cartButton"
        onClick={function () {setAddedToCart(!addedToCart)}}
        type="button"
        class="btn btn-lg activeSelectionButton"
      ><Icon.CartFill color="white"/> Added to Cart</button>} 
    }
    

    return (
      <div>
        {wishlistButton()}
        {cartButton()}
      </div>
    );
  }

  function WishlistModal () {
    return <Modal show={showWishlist}
    onHide={() => setShowWishlist(false)}>
      <Modal.Header className="modalHeader" closeButton>
        <Icon.HeartFill/>     Product Added to Wishlist
      </Modal.Header>
      <Modal.Body>
      <div className="row">
      <div className="col">
          <img
          alt={props.menuItem.name}
          src={props.menuItem.pictures[0]}
          class="modalPhoto"
        />
      </div>
      <div className="col">
          <h5>{useGlobalState('productName')}</h5>
          <h6>{useGlobalState('price')}</h6>
      </div>
      </div>
      <Button className='modalButton'>View your wishlist</Button>
        </Modal.Body>
    </Modal>
  }

  function CartModal () {
    return <Modal show={addedToCart}
    onHide={() => setAddedToCart(false)}>
      <Modal.Header className="modalHeader" closeButton>
        <Icon.CartFill/>     Product Added to Wishlist
      </Modal.Header>
      <Modal.Body>
      <div className="row">
      <div className="col">
          <img
          alt={props.menuItem.name}
          src={props.menuItem.pictures[0]}
          class="modalPhoto"
        />
      </div>
      <div className="col">
          <h5>{useGlobalState('productName')}</h5>
          <h6>{useGlobalState('price')}</h6>
          <p>Size: {useGlobalState('size')}</p>
          <p>Flavor: {useGlobalState('type')}</p>
      </div>
      </div>
      <Button className='modalButton'>View your wishlist</Button>
        </Modal.Body>
    </Modal>
  }

  return (
    <Row>
      <Col>
        <img
          alt={props.menuItem.name}
          src={props.menuItem.pictures[0]}
          id="mainPhoto"
        />
        {props.menuItem.pictures.map((e) => (
          <img src={e} class="extraPhoto" />
        ))}
        <br />
        {}
      </Col>
      <Col id="details">
        <h2>{props.menuItem.type}</h2>
        <h1>{props.menuItem.name}</h1>
        {PriceSegment()}
        <p style={{ color: "gray" }}>Additional Tax may apply on checkout.</p>
        <h2>Select Size</h2>
        {SizeButtons()}
        <h2>Select Flavor</h2>
        {DropdownMenu()}
        {OrderButtons()}
        {WishlistModal()}
        {CartModal()}
      </Col>
    </Row>
  );
}

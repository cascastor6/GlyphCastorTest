import { Form, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

import Profile from "../assets/profile.png";

export default function NavBar() {
  return (
    <Navbar id="nav">
      <Icon.List class="pull-left" color="#0ca8ac" size={30} />
      <NavbarBrand>
        <div class="input-group" id="searchBar">
          <div class="input-group-prepend">
            <Icon.Search color="gray" size={20} />
          </div>

          <Form.Control
            id="searchBarField"
          />
        </div>
      </NavbarBrand>
      <Nav className="ms-auto">
        <Nav.Link>
          <Icon.HeartFill color="#0ca8ac" size={30} />
        </Nav.Link>
        <Nav.Link href="#link">
          <Icon.CartFill color="#0ca8ac" size={30} />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

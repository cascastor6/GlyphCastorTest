import { Col, Row, Container, Form, InputGroup } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

export default function Footer() {
  return (
    <div id="footer">
      <Container>
        <Row>
          <Col>
            <div class="footerFoodColumn">
              <a>
                <h4>Snacks</h4>
              </a>
              <b />
              <a>
                <p>Fries</p>
              </a>
              <b />
              <a>
                <p>Burgers</p>
              </a>
              <b />
              <a>
                <p>Crackers and Crisps</p>
              </a>
              <b />
              <a>
                <p>Cookies & Baked Goods</p>
              </a>
              <b />
            </div>
          </Col>
          <Col>
            <div class="footerFoodColumn">
              <a>
                <h4>Salads</h4>
              </a>
              <b />
              <a>
                <p>Egg Noodles</p>
              </a>
              <b />
              <a>
                <p>Ramen Noodles</p>
              </a>
              <b />
              <a>
                <p>Udon Noodles</p>
              </a>
              <b />
              <a>
                <p>Soba Noodles</p>
              </a>
              <b />
            </div>
          </Col>
          <Col>
            <div class="footerFoodColumn">
              <a>
                <h4>Noodles</h4>
              </a>
              <b />
              <a>
                <p>Green Salad</p>
              </a>
              <b />
              <a>
                <p>Fruit Salad</p>
              </a>
              <b />
              <a>
                <p>Bound Salad</p>
              </a>
              <b />
              <a>
                <p>Dinner Salad</p>
              </a>
              <b />
            </div>
          </Col>
          <Col>
            <div class="footerFoodColumn">
              <a>
                <h4>SUBSCRIBE</h4>
              </a>
              <b />
              <a>
                <p>Stay updated on our latest food release</p>
              </a>
              <b />
              <InputGroup className="subscribeBar">
                <Form.Control id="emailField" />
                <InputGroup.Text style={{color: '#0ca8ac'}}><Icon.CaretRightFill/></InputGroup.Text>
              </InputGroup>

              <b />
              <b />
              <a>
                <p>Copyright 2021. All Rights Reserved</p>
              </a>
              <b />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

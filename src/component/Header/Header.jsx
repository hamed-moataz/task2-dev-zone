import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { FaCartShopping } from "react-icons/fa6";

import { Component } from "react";

class Header extends Component {
  render() {
    const product = this.props.products.length;
    console.log(product)

    return (
      <>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">DevZone</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Button
              variant="primary"
              onClick={() =>
                this.props.addProduct({
                  id: 0,
                  name: "shipcy",
                  price: 100,
                  items: 1,
                })
              }
            >
              shipcy
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                this.props.addProduct({
                  id: 1,
                  name: "apple",
                  price: 50,
                  items: 1,
                })
              }
            >
              apple
            </Button>
            <Button
              variant="success"
              onClick={() =>
                this.props.addProduct({
                  id: 2,
                  name: "banana",
                  price: 70,
                  items: 1,
                })
              }
            >
              banana
            </Button>
            <Button
              variant="warning"
              onClick={() =>
                this.props.addProduct({
                  id: 3,
                  name: "orange",
                  price: 60,
                  items: 1,
                })
              }
            >
              orange
            </Button>
            <Button
              variant="danger"
              onClick={() =>
                this.props.addProduct({
                  id: 4,
                  name: "kiwi",
                  price: 80,
                  items: 1,
                })
              }
            >
              kiwi
            </Button>

            <div className="d-flex gap-2">
              <FaCartShopping size={24} />
              {product}
            </div>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Header;

import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardGroup, Carousel, Col, Image, Row } from "react-bootstrap";
import logo from "./images/pexels-tina-nord-1775283.jpg";
import carouselItem from "./images/c2.jpg";
import testimonial from "./images/t1.png";
import aniv from "./images/aniversary.jpg";
import ContactForm from "./components/ContactForm";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bakeryItems: ["cookie_1", "cookie_2", "cookie_3", "cookie_4"],
      cookie1: {
        name: "c1",
        price: 100,
        description: "Tasty",
      },
      cookie2: {
        name: "c2",
        price: 200,
        description: "Delicious",
      },
      cookie3: {
        name: "c3",
        price: 300,
        description: "Great!",
      },
      cookie4: {
        name: "c4",
        price: 250,
        description: "Best!",
      },
      cartItems: [],
      name: "",
      email: "",
      message: "",
      disabled: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.target.id === "name") {
      this.setState({
        name: e.target.value,
      });
    }
    if (e.target.id === "email") {
      this.setState({
        email: e.target.value,
      });
    }
    if (e.target.id === "message") {
      this.setState({
        message: e.target.value,
      });
    }
  }

  handleSubmit(e) {
    this.setState((prevState) => ({
      disabled: !prevState.disabled,
    }));
    e.preventDefault();
    window.alert("Message submitted!");
  }

  render() {
    let items = this.state.bakeryItems;
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg" className="navbar-static-top" >
          <Container>
            <Navbar.Brand>Bakery App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Cart</Nav.Link>
                <NavDropdown
                  title="Dropdown"
                  id="basic-nav-dropdown"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={carouselItem}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Our best product</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={logo} alt="Second slide" />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Brought the most times by customers</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <br></br>

          <br></br>
          <h3 className="text-center">Welcome to the site</h3>
          <Row>
            <Col>
              <p>
                {" "}
                Information about business. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Doloribus cumque repellat cum
                nulla unde! Inventore id quae delectus voluptatibus impedit
                pariatur numquam aperiam necessitatibus praesentium eos? Aut
                sit, dolor rerum quaerat modi fugiat incidunt iusto eos!
                Commodi, nam ullam, doloribus, voluptas fugiat maxime
                dignissimos qui molestiae amet nihil numquam inventore. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Praesentium
                voluptates ducimus obcaecati mollitia eveniet itaque veniam
                minima dolorum omnis nihil!
              </p>
            </Col>
            <Col className="d-flex justify-content-center">
              <Image fluid rounded src={aniv}></Image>
            </Col>
          </Row>
          <Row sm={1} md={2} lg={2}>
            {items.map((i) => (
              <Col>
                <Card key={i}>
                  <Card.Img variant="top" alt="Img for" src={logo} />
                  <Card.Body>
                    <Card.Title>{i}</Card.Title>
                    <Card.Text>
                      1st cookiee is {this.state.cookie1.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <br></br>
          <h2 className="text-center">Customer Testimonials</h2>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={testimonial}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={testimonial}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <br></br>
          <h2 className="text-center">Get in touch with us for enquiries</h2>
          <ContactForm
            name={this.state.name}
            email={this.state.email}
            message={this.state.message}
            disabled={this.state.disabled}
            handlechange={this.handleChange}
            handlesubmit={this.handleSubmit}
          ></ContactForm>
          <br></br>
        </Container>
        <Navbar bg="dark" variant="dark" className="navbar-static-bottom">
          <Container>
          <Nav>
            <Navbar.Brand>Bakery App</Navbar.Brand>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Copyright
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" href="www.facebook.com">
                Facebook
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" href="www.instagram.com">
                Instagram
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
        </Navbar>
      </div>
    );
  }
}

export default App;

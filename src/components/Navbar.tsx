import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import ShoppingCart from "../images/shopping-cart.png"

export function Navbar() {
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                        About
                    </Nav.Link>
                </Nav>
                <Button
                    style={{ width: "3rem", height: "3rem", position: "relative" }}
                    variant="light" className="rounded-circle"
                >
                    <img src= {ShoppingCart} alt="Shopping cart" className="button-cart" width="25" height="25" style={{ position: "absolute", bottom: 10, right: 11 }}/>
                    <div 
                        className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                        style={{ 
                            color: "white",
                            fontSize: "12px",
                            width: "1rem",
                            height: "1rem",
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            transform: "translate(25%, 25%)"
                        }}
                    >
                        3
                    </div>
                </Button>
            </Container>
        </NavbarBs>
    )
}
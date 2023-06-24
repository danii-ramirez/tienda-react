import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

export default function NavBar() {
    return (
        <>
            <Navbar bg="primary" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt="neo logo"
                            src="/logo.png"
                            height="80px"
                            width="150px"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/category/Playstation 5">Playstation 5</Nav.Link>
                            <Nav.Link href="/category/XBOX">XBOX</Nav.Link>
                            <Nav.Link href="/category/Nintendo Switch">Nintendo Switch</Nav.Link>
                        </Nav>
                        <CartWidget />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

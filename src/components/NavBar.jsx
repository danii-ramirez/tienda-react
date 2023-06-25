import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <Navbar bg="primary" expand="lg">
            <Container>
                <Link to={"/"} className='navbar-brand'>
                    <img
                        alt="neo logo"
                        src="/logo.png"
                        height="80px"
                        width="150px"
                    />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={"/category/Playstation 5"} className='nav-link'>Playstation 5</Link>
                        <Link to={"/category/XBOX"} className='nav-link'>XBOX</Link>
                        <Link to={"/category/Nintendo Switch"} className='nav-link'>Nintendo Switch</Link>
                    </Nav>
                    <Form className="d-flex" style={{ marginRight: '100px' }}>
                        <Form.Control
                            type="search"
                            placeholder="Buscar"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="success">Buscar</Button>
                    </Form>
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

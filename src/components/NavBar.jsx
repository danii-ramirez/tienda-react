import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

export default function NavBar() {
    const [categories, setCategories] = useState([])

    const getCategories = async () => {
        const res = await fetch('https://fakestoreapi.com/products/categories')
        return res.json()
    }

    useEffect(() => {
        getCategories().then((data) => setCategories(data))
    }, [])

    return (
        <>
            <Navbar bg="primary" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        Neo
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                                {
                                    categories.map((cat) => {
                                        return (
                                            <NavDropdown.Item key={cat} href={`/category/${cat}`}>
                                                {cat}
                                            </NavDropdown.Item>
                                        )
                                    })
                                }
                            </NavDropdown>
                        </Nav>
                        <CartWidget />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

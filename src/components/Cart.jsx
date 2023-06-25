import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/cartContext";
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from "react-bootstrap";

export default function Cart() {
    const { getItems, removeItem } = useContext(CartContext)
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(getItems())
    }, [getItems])

    if (products.length > 0) {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-5">
                        <ListGroup as="ul">
                            {
                                products.map(prod => {
                                    return (
                                        <ListGroup.Item as="li" key={prod.id}
                                            className="d-flex justify-content-between align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold">{prod.title}</div>
                                                Cantidad: {prod.count}
                                            </div>
                                            <Button variant="primary" size="sm"
                                                onClick={() => removeItem(prod.id)}>
                                                x
                                            </Button>
                                        </ListGroup.Item>
                                    )
                                })
                            }
                        </ListGroup>
                    </div>

                    <div className="col-5">
                        <h3 className="text-center">Total de la compra: $</h3>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="cointainer mt-5">
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <h1>El carrito está vacío</h1>
                    </div>
                </div>
            </div>
        )
    }
}

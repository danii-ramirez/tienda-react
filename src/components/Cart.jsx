import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from "react-bootstrap";

export default function Cart() {
    const { getItems, removeItem } = useContext(CartContext)

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-5">
                    <ListGroup as="ul">
                        {
                            getItems().map(prod => {
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
            </div>
        </div>
    )
}

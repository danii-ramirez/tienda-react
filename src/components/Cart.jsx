import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import ListGroup from 'react-bootstrap/ListGroup';

export default function Cart() {
    const { getItems } = useContext(CartContext)

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-5">
                    <ListGroup as="ul">
                        {
                            getItems().map(prod => {
                                return (
                                    <ListGroup.Item as="li" key={prod.id}>
                                        {prod.title}
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

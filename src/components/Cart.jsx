import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/cartContext";
import Table from 'react-bootstrap/Table';
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
                <div className="row justify-content-center">
                    <div className="col-8">
                        <Table striped>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((prod) => {
                                        return (
                                            <tr key={prod.div}>
                                                <td>
                                                    <img src={prod.img} alt={prod.title}
                                                        height={'50px'} width={'100px'} />
                                                </td>
                                                <td>{prod.title}</td>
                                                <td>{prod.count}</td>
                                                <td>
                                                    <Button variant="primary" size="sm"
                                                        onClick={() => removeItem(prod.id)}>
                                                        x
                                                    </Button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
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

import { useState } from "react"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom";

export default function ItemCount({ stock, onClickAddToCart }) {
    const [count, setCount] = useState(0);

    function handledAdd() {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    function handledSubstract() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <ButtonGroup>
                        <Button variant="secondary" onClick={handledSubstract}>-</Button>
                        <Button variant="secondary" disabled>{count}</Button>
                        <Button variant="secondary" onClick={handledAdd}>+</Button>
                    </ButtonGroup>
                </div>
            </div>
            <div className="row justify-content-center mt-1">
                <div className="col-auto">
                    <Link to={'/cart'}>
                        <Button variant="primary" onClick={() => onClickAddToCart(count)}
                            disabled={count === 0 ? true : false}>
                            Agregar al carrito
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

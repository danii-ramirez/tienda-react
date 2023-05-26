import { useState } from "react"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function ItemCount({ stock }) {
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
            <ButtonGroup>
                <Button variant="secondary" onClick={handledSubstract}>-</Button>
                <Button variant="secondary" disabled>{count}</Button>
                <Button variant="secondary" onClick={handledAdd}>+</Button>
            </ButtonGroup>
            <Button variant="primary">Agregar al carrito</Button>
        </>
    )
}

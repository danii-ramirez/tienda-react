import { useState } from "react"

export default function ItemCount({ stock }) {
    const [count, setCount] = useState();

    function handledAdd() {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    function handledSubstract() {
        setCount(count - 1);
    }

    return (
        <>
            <button onClick={handledSubstract}>-</button>
            <p>{count}</p>
            <button onClick={handledAdd}>+</button>
            <button>agregar al carrito</button>
        </>
    )
}

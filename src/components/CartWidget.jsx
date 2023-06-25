import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

export default function CartWidget() {
    const { countItems } = useContext(CartContext)
    const [count, setCount] = useState()

    useEffect(() => {
        setCount(countItems())
    }, [countItems])

    return (
        <Link to={'cart'} className="nav-link">
            <i className="bi bi-cart" style={{ fontSize: '35px', marginRight: '5px' }}></i>
            {
                count > 0 &&
                <span style={{ fontSize: '35px' }}>{count}</span>
            }
        </Link>
    );
}

import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

export default function CartWidget() {
    const { countItems } = useContext(CartContext)

    return (
        <>
            <Link to={'cart'} className="nav-link">
                <i className="bi bi-cart" style={{ fontSize: '35px', marginRight: '5px' }}></i>
                <span style={{ fontSize: '35px' }}>{countItems()}</span>
            </Link>
        </>
    );
}

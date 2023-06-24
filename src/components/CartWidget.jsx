import { useContext } from "react";
import { CartContext } from "../context/cartContext";

export default function CartWidget() {
    const { countItems } = useContext(CartContext)

    return (
        <>
            <i className="bi bi-cart" style={{ fontSize: '35px', marginRight: '5px' }}></i>
            <span style={{ fontSize: '35px' }}>{countItems()}</span>
        </>
    );
}

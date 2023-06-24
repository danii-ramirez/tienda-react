import { useContext } from "react";
import { CartContext } from "../context/cartContext";

export default function CartWidget() {
    const { countItems } = useContext(CartContext)

    return (
        <>
            <i className="bi bi-cart"></i> {countItems()}
        </>
    );
}

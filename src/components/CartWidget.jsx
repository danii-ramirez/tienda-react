import { useContext } from "react";
import { cartContext } from "../context/cartContext";

export default function CartWidget() {
    const { countItems } = useContext(cartContext)

    return (
        <>
            <i className="bi bi-cart"></i> {countItems()}
        </>
    );
}

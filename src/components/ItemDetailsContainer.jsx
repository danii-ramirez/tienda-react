/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "./ItemDetails";
import Loader from "./Loader";
import NotContent from "./NotContent"
import { getItem } from "../services/firebase";
import { CartContext } from "../context/cartContext";

export default function ItemDetailsContainer() {
    const { id } = useParams()
    const [product, setProduct] = useState()
    const [loader, setLoader] = useState(true)
    const { addItem } = useContext(CartContext)

    function handleAddToCart(count) {
        addItem(product, count)
    }

    useEffect(() => {
        getItem(id).then((res) => {
            setProduct(res)
            setLoader(false)
        })
    }, [])

    if (loader) {
        return <Loader />
    } else {
        if (product === undefined) {
            return <NotContent />
        } else {
            return (
                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="col-auto">
                            <ItemDetails {...product} onClickAddToCart={handleAddToCart} />
                        </div>
                    </div>
                </div>
            );
        }
    }
}

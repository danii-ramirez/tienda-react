import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "./ItemDetails";
import Loader from "./Loader";

export default function ItemDetailsContainer() {
    const { id } = useParams()
    const [product, setProduct] = useState()

    const getProduct = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        return res.json()
    }

    useEffect(() => {
        setTimeout(() => {
            getProduct().then((data) => setProduct(data))
        }, 2000)
    }, [])

    if (product == undefined) {
        return <Loader />
    } else {
        return (
            <>
                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="col-auto">
                            <ItemDetails {...product} />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
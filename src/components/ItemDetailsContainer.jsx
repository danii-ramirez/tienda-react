import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "./ItemDetails";
import Loader from "./Loader";
import { getItem } from "../services/firebase";

export default function ItemDetailsContainer() {
    const { id } = useParams()
    const [product, setProduct] = useState()

    useEffect(() => {
        getItem(id).then((res) => {
            setProduct(res)
        })
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

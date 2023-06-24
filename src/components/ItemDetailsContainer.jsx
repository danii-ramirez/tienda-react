/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "./ItemDetails";
import Loader from "./Loader";
import NotContent from "./NotContent"
import { getItem } from "../services/firebase";

export default function ItemDetailsContainer() {
    const { id } = useParams()
    const [product, setProduct] = useState()
    const [loader, setLoader] = useState(true)

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
}

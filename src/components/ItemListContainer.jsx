import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from "./Loader";
import { getItems } from "../services/firebase";

export default function ItemListContainer() {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)
    const { category } = useParams()

    useEffect(() => {
        getItems().then((res) => {
            setProducts(res)
            setLoader(false)
        })
    }, [category])

    if (loader) {
        return <Loader />
    } else {
        return (
            <div className="container-fluid">
                <ItemList products={products} />
            </div>
        );
    }
}

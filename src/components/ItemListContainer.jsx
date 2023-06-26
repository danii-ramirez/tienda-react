import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from "./Loader";
import NotContent from "./NotContent"
import { getItems, getItemsByCategory } from "../services/firebase";
// import ItemSearch from "./ItemSearch";

export default function ItemListContainer() {
    const { category } = useParams()
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        if (category === undefined) {
            getItems().then((res) => {
                setProducts(res)
                setLoader(false)
            })
        } else {
            getItemsByCategory(category).then((res) => {
                setProducts(res)
                setLoader(false)
            })
        }
    }, [category])

    if (loader) {
        return <Loader />
    } else {
        if (products.length > 0) {
            return (
                <div className="container">
                    {/* <ItemSearch /> */}
                    <ItemList products={products} />
                </div>
            );
        } else {
            return <NotContent />
        }
    }
}

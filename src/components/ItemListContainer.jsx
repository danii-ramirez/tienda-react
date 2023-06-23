import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from "./Loader";

export default function ItemListContainer() {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)
    const { category } = useParams()

    const getProducts = async () => {
        if (category === undefined) {
            const res = await fetch('https://fakestoreapi.com/products')
            return res.json()
        } else {
            const res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
            return res.json()
        }
    }

    useEffect(() => {
        setTimeout(() => {
            getProducts().then((data) => setProducts(data))
            setLoader(false)
        }, 3000)
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

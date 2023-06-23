import Item from "./item"

export default function ItemList({ products }) {
    return (
        <div className="row justify-content-center mt-2">
            {
                products.map(prod => {
                    return (
                        <Item key={prod.id} {...prod} />
                    )
                })
            }
        </div>
    )
}

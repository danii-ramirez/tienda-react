import { useState, createContext } from "react";

const CartContext = createContext({ cart: [] })

function CartContextProvider({ children }) {
    const [cart, setCart] = useState([])

    function addItem(product, count) {
        if (cart.find(prod => prod.id == product.id) === undefined) {
            setCart([
                { ...product, count },
                ...cart
            ])
        } else {
            setCart(cart.map((prod) => {
                if (prod.id === product.id) {
                    return { ...prod, count: prod.count += count }
                } else {
                    return prod
                }
            }))
        }
    }

    function removeItem(id) {
        setCart(cart.filter(x => x.id !== id))
    }

    function countItems() {
        let total = 0
        cart.forEach(x => {
            total += x.count
        })
        return total
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, countItems }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartContextProvider }

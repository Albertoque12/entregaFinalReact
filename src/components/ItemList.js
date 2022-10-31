import React, {useContext} from "react";
import Header from "./NavBar"
import { DataContext } from "../context/Dataprovider";
import { Item } from "./Item";
import { CartWidget } from "./Carrito/CartWidget";


export const ItemList = () =>{

    const value = useContext(DataContext)
    const [productos] = value.productos
    console.log(productos);

    return (
        <>
        <Header/>
        <CartWidget />
        <h1 className="title"> Productos</h1>
        <div className="productos">
            {productos.map((producto) => (
                <Item 
                key={producto.id}
                id={producto.id}
                title={producto.title}
                price={producto.price}
                image={producto.image}
                author={producto.author}
                cantidad={producto.cantidad}
                />
            ))}
        </div>
        </>
    )
}

export default ItemList
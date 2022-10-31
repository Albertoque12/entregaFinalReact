import React, {useContext, useState, useEffect} from "react";
import { DataContext } from "../context/Dataprovider"; 
import { useParams } from "react-router-dom";
import {Header} from "./NavBar";
import { CartWidget } from "./Carrito/CartWidget";

export const ItemDetail = () => {
    const value = useContext(DataContext)
    const [productos] = value.productos;
    const addCarrito = value.addCarrito;
    const [detalle, setDetalle ] = useState([])
    const params = useParams();



    useEffect(() =>{
        productos.forEach(producto =>{
            if(producto.id === parseInt(params.id)){
                setDetalle(producto)
            }
        })
    }, [params.id, productos])  

    return (
        
        <>
        <Header/>
        <CartWidget/>
        <div className="detalles">
            <h2>{detalle.title}</h2>
            <h2>{detalle.author}</h2>
            <p className="price">${detalle.price}</p>
            <button onClick={()=> addCarrito(detalle.id)}>Añadir al carrito</button>
            <img src={detalle.image} alt={detalle.title} />
        </div> 
        </>
    )
}

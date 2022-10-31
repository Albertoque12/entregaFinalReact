import React from "react";
import Header from "./NavBar";
import Portada from "../images/inicio.jpg"
import { Link } from "react-router-dom";
import { CartWidget } from "./Carrito/CartWidget";

export const Inicio = () =>{
    return (
        <>
        <Header />
        <CartWidget />
        <div className="inicio">
            <h1 className="title1"> ¡Bienvenidos a la Librería Digital  Macondo¡</h1>
            <Link to="/productos">
            <h1 className="title"> Productos</h1>
            </Link>
            <img src={Portada} alt="Portada"/>
        </div>
        </>
    )
}

export default Inicio
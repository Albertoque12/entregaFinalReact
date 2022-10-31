import React from "react";
import {Routes, Route} from "react-router-dom";
import {Inicio} from "./Inicio";
import {ItemList} from "./ItemList";
import { ItemDetail } from "./ItemDetail";

export const Pages = () =>{
    return (
        <section>
            <Routes>
               <Route path="/" exact element={<Inicio/>} /> 
               <Route path="/productos" exact element={<ItemList/>} /> 
               <Route path="/producto/:id" exact element={<ItemDetail/>} /> 
            </Routes>
        </section>
    )
}


export default Pages
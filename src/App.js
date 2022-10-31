import React from "react";
import Header from "./components/NavBar"
import "boxicons"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import {Pages} from "./components/Pages"
import Inicio from "./components/Inicio";
import ItemList from "./components/ItemList";
import {DataProvider} from "./context/Dataprovider"
import { ItemDetail } from "./components/ItemDetail";


function App() {
  return (
    <>


    <DataProvider> 
    <div className="App">
      <Router>
        <Routes>
      <Route path='/' element={<Inicio/>} ></Route>
      <Route path='/productos' element={<ItemList/>} ></Route>
      <Route path='/detalles' element={<Pages/>} ></Route>
      <Route path="/producto/:id" exact element={<ItemDetail/>} /> 
       </Routes>
      </Router>
      
    </div>
    </DataProvider>
    </>
  );
}

export default App;

import React from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import SellerHome from "./components/SellerHome";
import AddItem from "./components/AddItem";
import ViewItems from "./components/ViewItems";

export default function App(){
    return(
      <div>
        <h1>Hello E commerce</h1>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/seller'} element={<SellerHome/>}/>
                <Route path={'/addItem'} element={<AddItem/>}/>
                <Route path={'/viewItems'} element={<ViewItems/>}/>
            </Routes>
        </BrowserRouter>
      </div>
          )
}
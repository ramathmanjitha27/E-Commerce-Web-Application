import React from "react";
import {Link} from "react-router-dom";

export default function SellerHome(){
    return(
        <div>
            <h1>Welcome to seller page</h1>
            <Link to={'/addItem'}>
                <button>Add Item</button>
            </Link>
            <br/><br/>

            <Link to={'/viewItems'}>
                <button>View Items</button>
            </Link>

            <br/><br/>
            <Link to={'/editItem'}>
                <button>Edit Item</button>
            </Link>

        </div>
    )
}
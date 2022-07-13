import React from "react";
import {Link} from "react-router-dom";

export default function Home(){
    return(
        <div>
            <Link to={'/seller'}>
                <button>Seller</button>
            </Link>

            <br/><br/>
            <button>Customer</button>
        </div>
    )
}
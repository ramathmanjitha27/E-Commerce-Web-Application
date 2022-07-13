import React, {useEffect, useState} from "react";
import axios from "axios";

export default function ViewItems(){

    const[items, setItems] = useState([])

    useEffect(()=>{
        function getItems(){
            axios.get('http://localhost:8001/api/item')
                .then((res)=>{
                    setItems(res.data.existingPost)
                    console.log(res.data)
                })
                .catch((err)=>{
                    alert(err.message)
                })
        }
        getItems();
    },[])

    return(
        <div>
            <h1>Listed Items</h1>

            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item, index)=>{
                    return(
                        <tr>
                            <td id={"index"}>{index+1}</td>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}
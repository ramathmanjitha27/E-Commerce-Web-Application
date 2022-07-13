import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function EditItem(){
    const [id, setID] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState('')

    useEffect(()=>{
        setID(localStorage.getItem('id'))
        setTitle(localStorage.getItem('title'))
        setDescription(localStorage.getItem('description'))
        setQuantity(localStorage.getItem('quantity'))
        setPrice(localStorage.getItem('price'))

    },[])


    const handleSubmit = (event)=>{

        const updatedItem = {
            title,
            description,
            price,
            quantity
        }

        axios.put('http://localhost:8001/api/item/'+id, updatedItem)
            .then(()=>{
                alert('The item updated succesfully');
            })
            .catch((err)=>{
                alert(err)
            })
    }

    return(
        <div>
            <h2>Edit Item</h2>

            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type={'text'} id={"title"} required={true} value={title}
                       onChange={(e)=>{
                           setTitle(e.target.value)
                       }}
                />
                <br/><br/>

                <label>Description</label>
                <input type={'text'} id={"description"} required={true} value={description}
                       onChange={(e)=>{
                           setDescription(e.target.value)
                       }}
                />
                <br/><br/>

                <label>Price</label>
                <input type={'number'} id={"price"} required={true} value={price}
                       onChange={(e)=>{
                           setPrice(e.target.value)
                       }}
                />
                <br/><br/>

                <label>Quantity</label>
                <input type={'number'} id={"quantity"} value={quantity}
                       onChange={(e)=>{
                           setQuantity(e.target.value)
                       }}
                />
                <br/><br/>

                {/*<input type={'submit'} value={'Update'}/>*/}
                <Link to={'/viewItems'}>
                <button onClick={handleSubmit}>Update</button>
                </Link>
            </form>
        </div>
    )
}
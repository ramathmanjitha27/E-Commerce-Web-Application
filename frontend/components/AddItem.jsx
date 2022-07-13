import React, {useState} from "react";
import axios from "axios";

export default function AddItem(){
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState('')

    const handleSubmit = (event)=>{
        console.log('Function called')
        const newItem = {
            title,
            description,
            price,
            quantity
        }

     axios.post('http://localhost:8001/api/item', newItem)
         .then(()=>{
             alert('The item added succesfully');
         })
         .catch((err)=>{
             alert(err)
         })
    }


    return(
        <div>
            <h2>Add Item Page</h2>

            <form >
                <label>Title</label>
                <input type={'text'} id={"title"} required={true}
                onChange={(e)=>{
                    setTitle(e.target.value)
                }}
                />
                <br/><br/>

                <label>Description</label>
                <input type={'text'} id={"description"} required={true}
                onChange={(e)=>{
                    setDescription(e.target.value)
                }}
                />
                <br/><br/>

                <label>Price</label>
                <input type={'number'} id={"price"} required={true}
                onChange={(e)=>{
                    setPrice(e.target.value)
                }}
                />
                <br/><br/>

                <label>Quantity</label>
                <input type={'number'} id={"quantity"}
                onChange={(e)=>{
                    setQuantity(e.target.value)
                }}
                />
                <br/><br/>

                {/*<input type={'submit'} value={'submit'}/>*/}
                <button onClick={handleSubmit}>Submit</button>

            </form>
        </div>
    )
}
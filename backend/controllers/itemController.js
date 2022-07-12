const item = require('../models/itemModel');

//Add Item controller
module.exports.add_Item = (req, res)=> {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const quantity = req.body.quantity;

    const newItem = new item({
        title,
        description,
        price,
        quantity
    })
    newItem.save()
        .then(() => {
                res.json("Item added")
            }
        ).catch((err) => {
        console.log(err);
    })
}

//get all items
module.exports.get_Item =   (req, res)=>{
   item.find()
       .then((items)=>{
         res.json({success:true, items})
       })
       .catch((err)=>{
           res.json(err)
       })
}

//get item by id
module.exports.get_Item_by_id = (req, res) => {
    const id = req.params.id;
    item.findById({_id: id})
        .then((foundItem)=>{
            res.json({success: true,  foundItem})
        })
        .catch((err)=>{
            res.json(err)
        })
}

//update item
module.exports.update_Item = (req, res) =>{
    const id = req.params.id;
    let {title, description, price, quantity} = req.body;

    const updateItem = {
        title,
        description,
        price,
        quantity
    }

    item.findByIdAndUpdate(id, updateItem)
        .then(()=>{
            res.status(200)
                .send({
                    status : 'Item updated',
                })
        })
        .catch((err)=>{
            res.status(200)
                .send({
                    status : 'Error when updating item',
                    error : err.message
                })
        })

}

//delete Item
module.exports.delete_Item = (req, res)=>{
    const id = req.params.id;
    item.findByIdAndDelete(id)
        .then(()=>{
            res.status(200)
                .send({
                    status : 'Item deleted'
                })
        })
        .catch((err)=>{
            res.status(500)
                .send({
                    status: 'Error when deleting the item',
                    error: err.message
                })
        })
}
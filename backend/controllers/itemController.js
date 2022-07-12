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
         res.json({success:true, existingPost : items})
       })
       .catch((err)=>{
           res.json(err)
       })
}

//get item by id
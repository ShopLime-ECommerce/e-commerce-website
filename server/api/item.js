const express = require('express');
const Sequelize = require('Sequelize');
const router = express.Router();
const Item = require('../models/item');

//gettting all the items
router.get('/', async (req, res)=>{
    let items = await Item.findAll();
    res.json(items)
});

//getting an item by id
router.get('/:id', async(req, res)=>{
    let id = req.params.id;
    let item = await Item.findById(id)
    .catch((error)=>{
        res.json(error)
    })
    res.json(item)
});

//adding a new item
router.post('/', async(req, res)=>{
    let {id, name, imageUrl,price, description} = req.body;
    await Item.create({
        id: id,
        name: name,
        imageUrl: imageUrl,
        price: price,
        description: description
    })
    .then ((newItem)=>{
        res.json(newItem)
    })
    .catch((error)=>{

        res.json(error)
    })
});

// TODO
// //updating an existing item
// router.put('/',(req, res)=>{
//     res.json()
// });

// //deleting an existing item
// router.delete('/',(req, res)=>{
//     res.json()
// });


module.exports = router;

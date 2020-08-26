const express = require('express');
const Sequelize = require('Sequelize');
const router = express.Router();
const Item = require('../db/models/Item');
const Order = require('../db/order')
const User = require('../db/models/User')

//gettting all the items
router.get('/', async (req, res)=>{
    let orders = await Order.findAll();
    res.json(orders)
});

//getting an item by id
router.get('/:id', async(req, res)=>{
    let id = req.params.id;
    let order = await Order.findById(id)
    .catch((error)=>{
        res.json(error)
    })
    res.json(order)
});

//adding a new item
router.post('/', async(req, res)=>{
    let {id, user_id, item_id,status} = req.body;
    await Order.create({
        id: id,
        userId: user_id,
        itemId: item_id,
        status: status
    })
    .then ((newOrder)=>{
        res.json(newOrder)
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
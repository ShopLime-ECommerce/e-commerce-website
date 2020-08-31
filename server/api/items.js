const router = require('express').Router()
const Item = require('../db/models/item')

// Gettting all the items
router.get('/', async (req, res) => {
	console.log('getting called')
	let items = await Item.findAll()
	res.json(items)
})

// // Getting an item by id
// router.get('/:id', async (req, res) => {
// 	let id = req.params.id
// 	let item = await Item.findById(id).catch((error) => {
// 		res.json(error)
// 	})
// 	res.json(item)
// })

// // Adding a new item
// router.post('/', async (req, res) => {
// 	let { id, name, imageUrl, price, description } = req.body
// 	await Item.create({
// 		id: id,
// 		name: name,
// 		imageUrl: imageUrl,
// 		price: price,
// 		description: description,
// 	})
// 		.then((newItem) => {
// 			res.json(newItem)
// 		})
// 		.catch((error) => {
// 			res.json(error)
// 		})
// })

// router.put('/',(req, res)=>{
// 	let { id, user_id, item_id, status } = req.body
// 	await Order.update({
// 		id: id,
// 		userId: user_id,
// 		itemId: item_id,
// 		status: status,
// 	})
// 		.then((newOrder) => {
// 			res.json(newOrder)
// 		})
// 		.catch((error) => {
// 			res.json(error)
// 		})
// });

// // //deleting an existing item
// router.delete('/',(req, res)=>{
// 	let { id, user_id, item_id, status } = req.body
// 	await Order.delete({
// 		id: id,
// 		userId: user_id,
// 		itemId: item_id,
// 		status: status,
// 	})
// 		.then((newOrder) => {
// 			res.json(newOrder)
// 		})
// 		.catch((error) => {
// 			res.json(error)
// 		})
// });

module.exports = router

const router = require('express').Router()
const Order = require('../db/models/order')
const sequelize = require('../config/config');

// Gettting all the items
``
router.get('/', async (req, res) => {
	console.log('getting called')
	let order = await Order.findAll()
	res.json(order)
})

// Getting an item by id
router.get('/:id', async (req, res) => {
	let order = await Order.findById(req.params.id).catch((error) => {
		res.json(error)
	})
	res.json(order)
})

// Adding a new item
router.post('/', async (req, res) => {
	let { id, user_id, item_id, status } = req.body
	await Order.create({
		id: id,
		userId: user_id,
		itemId: item_id,
		status: status,
	})
		.then((newOrder) => {
			res.json(newOrder)
		})
		.catch((error) => {
			res.json(error)
		})
})

// router.put('/', async (req, res) => {
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
// })

// router.delete('/', async (req, res) => {
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
// })

// router.post('/:id/reviews', async (req, res) => {
// 	const product = await Product.findById(req.params.id)
// 	if (product) {
// 		const review = {
// 			name: req.body.name,
// 			rating: Number(req.body.rating),
// 			comment: req.body.comment,
// 		}
// 		product.reviews.push(review)
// 		product.numReviews = product.reviews.length
// 		product.rating =
// 			product.reviews.reduce((a, c) => c.rating + a, 0) / product.reviews.length
// 		const updatedProduct = await product.save()
// 		res.status(201).send({
// 			data: updatedProduct.reviews[updatedProduct.reviews.length - 1],
// 			message: 'Review saved successfully.',
// 		})
// 	} else {
// 		res.status(404).send({ message: 'Product Not Found' })
// 	}
// })

// await Order.delete({
// 	iid: id,
// 	name: name,
// 	description: description,
// 	imageUrl: imageUrl,
// 	price: price
// })

module.exports = router

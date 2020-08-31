const router = require('express').Router()
const { Item } = require('../db/models/Item')

router.get('/:ids', (req, res, next) => {
	const idArray = req.params.ids.split(',')
	let findArray = []
	let items = []

	idArray.forEach((id) => {
		findArray.push(
			Item.findOne({ where: { id: id } }).then((item) => {
				items.push(item)
			})
		)
	})

	Promise.all(findArray).then(() => res.send(items))
})

module.exports = router

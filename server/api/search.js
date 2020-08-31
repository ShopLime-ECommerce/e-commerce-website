const router = require('express').Router()
const { Item } = require('../db/models')

router.get('/:term', (req, res, next) => {
	Item.findAll({
		where: {
			name: {
				$ilike: '%' + req.params.term + '%',
			},
		},
	})
		.then((products) => res.json(products))
		.catch(next)
})

module.exports = router

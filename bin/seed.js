const database = require('../server/db/database')
const { User, Items, Order } = require('../server/db/models')

const lemons = [
	{
		name: 'Eureka Lemon',
		description:
			'The Eureka lemon tree is considered to be a true lemon tree, as it is not the result of any hybridization.',
		price: 1000,
		imgUrl:
			'https://www.greenandvibrant.com/sites/default/files/inline-images/types-of-lemon/Eureka-Lemons.jpg',
	},
	{
		name: 'Pink Variegated Lemon Tree',
		description:
			'As the lemons ripen, their skin takes on a solid yellow color, while the inner flesh is pale pink.',
		price: 2150,
		imgUrl:
			'https://www.greenandvibrant.com/sites/default/files/inline-images/types-of-lemon/Variegated-Pink-Lemons.jpg',
	},
	{
		name: 'Lisbon Lemon',
		description:
			'Lisbon lemons are an old heirloom variety, which is believed to have their origins in Portugal. ',
		price: 1980,
		imgUrl:
			'https://www.greenandvibrant.com/sites/default/files/inline-images/types-of-lemon/Lisbon-Lemons.jpg',
	},
	{
		name: 'Meyer Lemon',
		description:
			' It is a cross between a lemon and a sweet orange such as a mandarin.',
		price: 4200,
		imgUrl:
			'https://www.greenandvibrant.com/sites/default/files/inline-images/types-of-lemon/Meyer-Lemons.jpg',
	},
	{
		name: 'Primofori Lemon',
		description:
			'This tree hails from Spain, where it is locally known as the Fino lemon tree, the Blanco lemon tree, or the Mesero lemon tree.',
		price: 3000,
		imgUrl:
			'https://www.greenandvibrant.com/sites/default/files/inline-images/types-of-lemon/Primofiore-Lemons.jpg',
	},
	{
		name: 'Varna Lemon',
		description:
			'This lemon tree is native to Spain, where it is the second most important lemon tree after the Primofiori.',
		price: 1700,
		imgUrl:
			'http://snaturefruits.com/wp-content/uploads/2016/03/LIMON-snature.jpg',
	},
]

const orders = [{}]

const users = [{}]

seed = async () => {}

module.exports = seed

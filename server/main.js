const PORT = 8080
const server = require('./index')
const { database } = require('./db/database')

const init = async () => {
	try {
		await database.sync()
		server.listen(PORT, () => {
			console.log(`Listening on ${PORT}`)
		})
	} catch (error) {
		console.log(`Error occured while setting up server: ${error}`)
	}
}

init()

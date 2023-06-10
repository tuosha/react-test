import { _personUrl } from './urlsList'

const getDataFromServer = async (url) => {
	const response = await fetch(url)
	if (!response.ok) {
		throw new Error("Can't get data from server! Status is: " + response.status)
	}
	return response.json()
}
const getPerson = async (id) => {
	const person = await getDataFromServer(`${_personUrl + id}`)
	return person.json()
}


export {
	getDataFromServer,
    getPerson
}
import { _baseApiUrl, _personsUrl } from './urlsList'
import {_trasformPersonData} from './trasformDataObjects'

const getDataApiFromServer = async (url) => {
    const response = await fetch(`${_baseApiUrl}` + url)
    if (!response.ok) {
        throw new Error(
          'Can\'t get data from server! Status is: ' + response.status)
    }
    return response.json()
}
const getAllPersons = async () => {
	const persons = await getDataApiFromServer(_personsUrl)
	return persons.results.map(_trasformPersonData)
}
const getPerson = async (id) => {
    const person = await getDataApiFromServer(`${_personsUrl + id}`)
	return _trasformPersonData(person)
}

export {
	getDataApiFromServer,
    getAllPersons,
    getPerson,
}
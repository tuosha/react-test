import { useEffect, useState } from 'react'
import { getAllPersons } from '../../data/getDataApi'
import Spinner from '../Spinner/Spinner'

const PersonsList = () => {
	const [persons, setPersons] = useState([])
	const [isLoaded, setLoaded] = useState(false)
	useEffect(() => {
		getAllPersons().then(res => {
			setPersons(res)
			setLoaded(true)
		})
	}, [])
	return (
	  !isLoaded ?
	    <Spinner/>:
		persons.length && (
			<ul className={'personal-list'}>
				{persons.map(person =>
				  <li key={person.id}>{person.name}</li>
				)}
			</ul>
	  )
	)
}

export default PersonsList
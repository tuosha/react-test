import { useEffect, useState } from 'react'
import { getAllPersons } from '../../data/getDataApi'

const PersonsList = () => {
	const [persons, setPersons] = useState([])
	useEffect(() => {
		getAllPersons().then(res => {
			setPersons(res)
		})
	}, [])
	return (
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
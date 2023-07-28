import './ItemsList.css'
import { Item } from '../Item/Item'
import { useState } from 'react'

const ItemsList = ( {data} ) => {
	const [currentData, setData] = useState(data)
	const handleDelete = (id) => setData(currentData.filter(item => item.id !== id))
	return (
	  (!currentData.length) ?
	    'Empty list!' :
		  (currentData.length) && (
			<ul className={'items-list'}>
				{currentData.map(item =>
				  <Item item={item} key={item.id} handleDelete={handleDelete}/>
				)}
			</ul>
		  )
	)
}

export default ItemsList
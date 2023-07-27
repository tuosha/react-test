import './ItemsList.css'
import { Item } from '../Item/Item'

const ItemsList = ( {data} ) => {
	return (
	  (data.length) && (
		<ul className={'items-list'}>
			{data.map(item =>
			  <Item item={item} key={item.id}/>
			)}
		</ul>
	  )
	)
}

export default ItemsList
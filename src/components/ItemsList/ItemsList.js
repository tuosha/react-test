import './ItemsList.css'

const ItemsList = ({data}) => {
	return (
	  (data.length) && (
		<ul className={'items-list'}>
			{data.map(item =>
			  <li key={item.id}>{item.name}</li>
			)}
		</ul>
	  )
	)
}

export default ItemsList
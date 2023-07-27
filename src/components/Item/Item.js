export const Item = ( {item} ) => {
	const records = <li key={item.id}>
		{Object.entries(item).map(([key, val]) =>
		  <span key={key[0]}>{val} </span>
		)}
	</li>
	return (
	  records
	)
}
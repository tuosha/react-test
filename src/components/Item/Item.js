export const Item = ( {item, handleDelete} ) => {
	const records =
	<li key={item.id}>
		{Object.entries(item).map(([key, val]) =>
		  <span key={key[0]}>{val} </span>
		)}
		<button onClick={() => handleDelete(item.id)}>Delete</button>
	</li>
	return (
	  records
	)
}
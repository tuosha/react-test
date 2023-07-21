import { useState, useEffect } from 'react'
import Spinner from '../Spinner/Spinner'

const withData = (View, getData) => (props) => {
	const [data, setData] = useState([])
	const [loaded, setLoaded] = useState(false)
	useEffect(() => {
		getData().then(res => {
			setData(res)
			setLoaded(true)
		})
	}, [])
	return (
	  (!loaded) ?
	    <Spinner/>:
		<View {...props} data={data}/>
	)
}

export {
	withData
}

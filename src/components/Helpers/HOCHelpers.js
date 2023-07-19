import { useState, useEffect } from 'react'

const withData = (View, getData) => (props) => {
	const [data, setData] = useState([])
	useEffect(() => {
		getData().then(res => {
			setData(res)
		})
	}, [])
	return (
		<View {...props} data={data}/>
	)
}

const withSpinner = (View, Spinner) => (props) => {
	const [loaded, setLoaded] = useState(false)
	useEffect(() => {
		if (props.data.length && !loaded) setLoaded(true)
	},[props.data.length, loaded])
	return (
	  (!loaded) ?
		<Spinner/>:
		<View {...props}/>
	)
}

const withDataAndSpinner = (View, getData, Spinner) => (props) => {
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
	withData,
    withSpinner,
	withDataAndSpinner
}
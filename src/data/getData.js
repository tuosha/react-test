
const getDataFromServer = async (url) => {
	const response = await fetch(url)
	if (!response.ok) {
		throw new Error("Can't get data from server! Status is: " + response.status)
	}
	return response.json()
}

export {
	getDataFromServer
}
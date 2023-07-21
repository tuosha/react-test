import { getAllPersons } from '../../data/getDataApi'
import { withData } from '../Helpers/HOCHelpers'
import ItemsList from '../ItemsList/ItemsList'


const PersonsList = () => {
	return (
	    <ValidList/>
	)
}

const ValidList = withData(ItemsList,getAllPersons)

export default PersonsList
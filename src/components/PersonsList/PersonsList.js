import { getAllPersons } from '../../data/getDataApi'
import {
	withData,
	// withDataAndSpinner,
	withSpinner,
} from '../Helpers/HOCHelpers'
import ItemsList from '../ItemsList/ItemsList'
import Spinner from '../Spinner/Spinner/Spinner'
// import NewSpinner from '../Spinner/NewSpinner/NewSpinner'

const PersonsList = () => {
	return (
	  <>
		  <PersonListWithDataAndSpinner />
		  {/*<PersonListWithDataAndSpinner2 />*/}
	  </>
	)
}

const PersonListWithDataAndSpinner = withData(withSpinner(ItemsList, Spinner),getAllPersons)
// const PersonListWithDataAndSpinner2 = withDataAndSpinner(ItemsList, getAllPersons, NewSpinner)

export default PersonsList
import { getAllPersons } from '../../data/getDataApi'
import ItemsList from '../ItemsList/ItemsList'
import Spinner from '../Spinner/Spinner/Spinner'
import { compose } from '../../utils/utils'
import {
	withData,
	withListOptions,
	withDataAndSpinner,
	withSpinner,
} from '../Helpers/HOCHelpers'

const PersonsList = () => {
	return (
	  <>
		  <PersonListWithDataAndSpinner />
		  <PersonListWithDataAndSpinner2 />
	  </>
	)
}

const PersonListWithDataAndSpinner =
	compose(
		withData(getAllPersons),
		withSpinner(Spinner),
		withListOptions
	)(ItemsList)

const PersonListWithDataAndSpinner2 =
	compose(
		withDataAndSpinner(getAllPersons, Spinner),
		withListOptions({deleteBtn: true})
	)(ItemsList)

export default PersonsList
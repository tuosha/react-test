import PersonsList from '../PersonsList/PersonsList'
import UseEffectsHook from '../../tests/Hooks/UseEffectsHook/UseEffectsHook'
import TwoWayBinding from '../../tests/Hooks/CustomHooks/TwoWayBinding/TwoWayBinding'
import HeaderNavigation from '../HeaderNagation/HeaderNagation'
import PlanetsList from '../PlanetsList/PlanetsList'
import './App.css'

const App = () => {
    return (
	  <>
		<body className="app-body">
			<header className="app-header">
				<HeaderNavigation/>
			</header>
			<PersonsList/>
			<PlanetsList/>
			<UseEffectsHook/>
			<TwoWayBinding/>
		</body>
		<footer className="app-footer">
		</footer>
      </>
    )
}
export default App

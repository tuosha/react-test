import logo from '../../logo.svg'
import './App.css'
import PersonsList from '../PersonsList/PersonsList'
import UseEffectsHook from '../../tests/Hooks/UseEffectsHook/UseEffectsHook'

const App = () => {
    return (
        <>
          <header className="app-header">
              <img src={logo} className="app-header__logo" alt="logo"/>
              <p>
                  Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="app-link"
                href="https://reactjs.org"
              >
                  Start
              </a>
          </header>
          <body>
			<PersonsList/>
			<UseEffectsHook/>
          </body>
          <footer className="app-footer">
          </footer>
      </>
    )
}
export default App

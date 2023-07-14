import logo from '../../logo.svg'
import './App.css'

const App = () => {
    return (
      <div className="app">
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
          <body className="app-body">

          </body>
          <footer className="app-footer">

          </footer>
      </div>
    )
}
export default App

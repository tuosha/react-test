import logo from '../../logo.svg';
import './App.css';
import { getDataFromServer } from '../../data/getData'

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo"/>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
				>
					Start
				</a>
				<table>
					<thead>
						<tr>Name</tr>
					</thead>
					<tbody>
						<td>her</td>
					</tbody>
				</table>
			</header>
		</div>
	)
}
export default App;

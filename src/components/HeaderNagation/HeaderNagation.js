import { Link } from 'react-router-dom'
import './HeaderNagation.css'

const HeaderNavigation = () => {
	return (
	<>
		<nav className="header-navigation-nav">
			<ul className="header-navigation__list">
				<li><Link to={`persons`}>Persons</Link></li>
				<li><Link to={`planets`}>Planets</Link></li>
			</ul>
		</nav>
	</>
	)
}

export default HeaderNavigation
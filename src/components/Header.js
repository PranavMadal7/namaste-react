import { useState } from 'react';
import { Link } from 'react-router-dom';

import { LOGO_URL } from '../utils/constants';

const Header = () => {
	const [authButton, setAuthButton] = useState('Login');

	return (
		<div className="header">
			<div className="logo">
				<img className="app-logo" alt="logo" src={LOGO_URL} />
			</div>
			<div className="nav-items">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About Us</Link>
					</li>
					<li>
						<Link to="/contact">Contact Us</Link>
					</li>
					<li>Cart</li>
					<button
						className="auth-btn"
						onClick={() => {
							authButton === 'Login' ? setAuthButton('Logout') : setAuthButton('Login');
						}}
					>
						{authButton}
					</button>
				</ul>
			</div>
		</div>
	);
};

export default Header;

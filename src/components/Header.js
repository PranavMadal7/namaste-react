import { useState } from 'react';
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
					<li>Home</li>
					<li>About Us</li>
					<li>Contact Us</li>
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

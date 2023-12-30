import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element
const heading = <h1>namaste react from jsx 🚀</h1>;

// React Functional Component
const HeadingComponent = () => {
	return (
		<div>
			<h1>Namaste React from Functional Component</h1>
			{heading}
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);

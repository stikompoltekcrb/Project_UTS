import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style.css';
import Form from './Form';
import ListItem from './List.js';
function Index(){
	return(
  <div>
  	<Form />
    <ListItem />
  </div>
	)
}
	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(<Index />);

import React from "react";

export default function Form(){
	const Hours = new Date().getHours();
	const midnight = Hours >= 24 || Hours <= 6
	return(
		<div>
			{/* Implementasi Short Circuit */}
			{midnight && <img src="../images.jpg"/>}
		<h1>My Todo List App</h1>
		<form className="form-row">
			<label htmlFor="input-list">Add New List</label>
			<input id="input-list"></input>
			<button className="btn">Add</button>
		</form>
		</div>
	)
}
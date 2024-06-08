import React from "react";
export default function ListItem(){
	// Implementasi .Map
	const list = ["Workout","Learning","Sleeping","Pray", "Study", "Ngaji"]
	return(
	<div className='list'>
		<h3>Todo List</h3>
		<ul className='item'>
			{list.map((item,i)=>(
	// Implementasi key
		<li key={i}>
			<label>
				<input type='checkbox'></input>{`${i+1}.${item}`}
			</label>
			<button className='btn btn-danger'>Delete</button>
		</li>))}
		</ul>
		</div>
		
	)
}
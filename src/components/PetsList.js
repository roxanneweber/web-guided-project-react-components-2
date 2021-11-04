import React from 'react';
// 👉 1- We need the Pet component
import Pet from './Pet/';
export default function PetsList(props) {
	const { pets } = props;
	console.log(props);

	return (
		<div className='list-pets-friends container'>
			{/* 2- Loop over the data generating a Pet element as you go */}
			{/* What props does the Pet component expect? this is called an 'implicit return' and can only be used if we have only one item to return */}
			{pets.map((pet) => (
				<Pet pet={pet} key={pet.id} />
			))}
		</div>
	);
}

{
	/* the <Pet /> above renders the Pet component so we don't need the 'return' keyword */
}

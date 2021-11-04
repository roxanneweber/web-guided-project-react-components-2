import React from 'react';
import PetsList from './PetsList';

export default function Friend(props) {
	//console.log(props);
	// 👉 1- What does a Friend need?
	const { friend, changeStatus } = props; // this allows me to take 'props' off as a prefix in the javascript references below
	return (
		<div className='friend-friends container'>
			{/* 👉 2- Fix the JSX so it displays real info coming into the component */}
			<div className='friend-info'>
				<div>
					<h3>Name: {friend.name}</h3>
					<p>Age: {friend.age}</p>

					<p>
						{/* if we just reference {friend.married} here, because married is a boolean JS says *what??* and ignores it - instead we have to tell it "if it is true, do this... if it is false, do this...*/}
						Married: {friend.married ? 'Yes' : 'No'}{' '}
						<button onClick={() => changeStatus(friend.id)}>
							change
						</button>
					</p>
					<div>
						Likes:
						<ul>
							{/* 👉 3- Loop over the friend's hobbies and generate <li/> elements as you go */}
						</ul>
					</div>
				</div>

				<div>
					{/* 👉 3- What data does the PetsList need? */}
					{/* What is the exact name of the prop/props it expects? */}
					{/* Is the data around here somewhere so I may pass it? */}
					<PetsList />
				</div>
			</div>
		</div>
	);
}

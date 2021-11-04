import React from 'react';
// 👉 1- FriendsList renders several Friend components, import Friend
import Friend from './Friend';

// right now this function has access to friends array and changeStatus function within props
export default function FriendsList(props) {
	console.log(props);

	// 👉 2- What data does FriendsList need to do its job? Use destructuring
	const { friends, changeStatus } = props; // now we have created two variables and added them to a props object

	return (
		<div className='list-friends container'>
			{/* 👉 3- We need to loop over the data rendering a Friend as we go */}
			{/* Each friend is going to need a `key` prop and also some other prop with data */}
			{/* just like in the App component, we want our child Friend component to have access to the information it needs to process; below we map the entire array of friends, for each one we return a unique key (required) and all the friend object items plus the changeStatus */}
			{friends.map((fr) => {
				return (
					<Friend friend={fr} changeStatus={changeStatus} key={fr.id} />
				);
			})}
		</div>
	);
}

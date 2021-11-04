// This is the top-level component
// so we'll keep application state at this level.
// 👉 1- Import the state hook!
import React, { useState } from 'react';
// 👉 2- Import the dummy data that will power the application.
// (Tomorrow we'll fetch the data from an API instead.)
import friendsData from '../dummy-data/friends';
import FriendsList from './FriendsList';
import Search from './Search';

export default function App() {
	// 👉 3- Initialize a slice of state to keep track of the data
	// using the dummy data as the initial value of the slice of state
	const [friends, setFriends] = useState(friendsData);

	// 👉 4- Initialize a slice to keep track of the value of the search box
	// using an empty string as the initial value of the slice
	const [searchTerm, setSearchTerm] = useState('');

	// 👉 5- Build a `changeStatus` function that takes an id and
	// changes the `married` from true to false and viceversa

	//* because we have to hang onto a variable to change it here, we first need to create another variable to hold the info we need

	const changeStatus = (id) => {
		//* we create a variable 'updatedFriends' and the value is equal to:
		//* we map over all the elements in the friends data array, and we need access to all the individual object data, so we need the ...friends
		const updatedFriends = friends.map((fr) => {
			return fr.id === id ? { ...fr, married: !fr.married } : fr;
		});

		{
			/* this is where we are now updating only the items changed in our virtual fr mapped array */
		}
		setFriends(updatedFriends);
	};

	// STRETCH - Make a helper function that returns
	// a filtered array of friends data (filtering by search term)

	const getFilteredFriends = () => {
		const normalized = searchTerm.trim().toLowerCase();
		if (!normalized) return friends;

		return friends.filter((friend) => {
			return friend.name.toLowerCase().includes(normalized);
		});
	};

	return (
		<div className='app-friends container'>
			{/* 👉 6- Render the Search component */}
			<Search setSearchTerm={setSearchTerm} />

			{/* STRETCH - Changes to the input should update the search term */}

			{/* 👉 7- Render the FriendsList component */}
			{/* first check in FriendsList component to see what data we will need for it; then, add reference to those variables in our render statement so ensure App.js has access */}
			<FriendsList
				friends={getFilteredFriends()}
				changeStatus={changeStatus}
			/>
			{/* this statement will now 'pass down' these variables for use in the FriendsList component */}
			{/* What prop/props does FriendsList need? */}
		</div>
	);
}

// This is the top-level component
// so we'll keep application state at this level.
// 👉 1- Import the state hook!
import React, { useState } from 'react';
// default export -> no curly brackets!
// named export -> explicit naming + curly brackets

import FriendsList from './FriendsList';
import Search from './Search';
// 👉 2- Import the dummy data that will power the application.
// (Tomorrow we'll fetch the data from an API instead.)

import friendsData from '../dummy-data/friends';

export default function App() {
  // 👉 3- Initialize a slice of state to keep track of the data
  // using the dummy data as the initial value of the slice of state
  const [friends, setFriends] = useState(friendsData);
  
  // 👉 4- Initialize a slice to keep track of the value of the search box
  // using an empty string as the initial value of the slice
  const [searchTerm, setSearchTerm] = useState('');

  // 👉 5- Build a `changeStatus` function that takes an id and
  // changes the `married` from true to false and viceversa
  const changeStatus = id => {
      // NEVER MUTATE STATE DIRECTLY
      // HAVE TO USE setter FUNCTIONS!!!
      // NEVER MUTATE STATE DIRECTLY

      // map, filter, reduce, find -> returning something
      // map + filter + reduce -> returning a new array
      // find -> returning an element in the array
      // These do not mutate the array directly
      const updatedFriends = friends.map(friend => {
        return friend.id === id ? { ...friend, married: !friend.married } : friend
      })

      setFriends(updatedFriends);
  }

  // STRETCH - Make a helper function that returns
  // a filtered array of friends data (filtering by search term)

  return (
    <div className='app-friends container'>
      {/* 👉 6- Render the Search component */}
      <Search />
      {/* STRETCH - Changes to the input should update the search term */}

      {/* 👉 7- Render the FriendsList component */}
      {/* What prop/props does FriendsList need? */}
      <FriendsList friends={friends} changeStatus={changeStatus} />
    </div>
  )
}

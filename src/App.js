import './App.css';
import React from 'react';
import Profile from './Profile/Profile'

function App() {
  const handleName = (name) => {
    alert('Name:${name}');
  };

  return (
    <Profile
      fullName="Meriem Herrati"
      bio="Full Stack Developer"
      profession="web developper"
      image="./react-props-Checkpoint/checkpoint/src/Profile/pexels-photo-1391495.jpeg"
      handleName={handleName}
    />
  );
}

export default App;

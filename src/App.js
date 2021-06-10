import './App.css';
import React from 'react';
import axios from "axios";

const { useState } = React;

  
const fetchUserGistData = async (user) => {
  return axios.get(`https://api.github.com/users/${user}/gists`)
  .then(({data}) => {
    return data;
  }).catch( (error) => {
    console.log(error);
    return error;
  });
}

function App() {
  const [user, setUser] = useState('');
  const [gistListData, setGistListData] = useState({});

  const setUsername = (event) => {
    setUser(event.target.value);
  }

  const fetchGistList = async event => {
    event.preventDefault();

    const data = await fetchUserGistData(user);
    setGistListData(data || '');
    console.log(data);
  }

  return (
    <div className="App">

    </div>
  );
}

export default App;

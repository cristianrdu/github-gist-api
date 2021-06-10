import './App.css';
import React from 'react';
import axios from "axios";
import SearchBox from './components/search-box/search-box';
import GistList from './components/gist-list/gist-list';

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
      <SearchBox placeholder='Search by user...' handleChange={setUsername} handleSubmit={fetchGistList}/>
      {gistListData ? 
      <GistList data= {gistListData}/>
      : null}
    </div>
  );
}

export default App;

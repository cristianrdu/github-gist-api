import './App.css';
import React from 'react';
import axios from "axios";
import SearchBox from './components/search-box/search-box';
import GistList from './components/gist-list/gist-list';

const { useState } = React;

  

function App() {
  const [user, setUser] = useState('');
  const [gistListData, setGistListData] = useState([]);
  
  const setUsername = (event) => {
    setUser(event.target.value);
  }

  const fetchUserGistData = async () => {
    return axios.get(`https://api.github.com/users/${user}/gists`)
    .then(({data}) => {
      return data;
    }).catch((error) => {
      return error;
    });
  }
  
  const fetchGistList = async event => {
    event.preventDefault();

    if (user !== '') {
      const data = await fetchUserGistData();
      setGistListData(data || '');
      console.log(data);
    }else {
      alert("You need to type in a username first");
    }
  }

  return (
    <div className="App">
      <SearchBox placeholder='Search by user...' handleChange={setUsername} handleSubmit={fetchGistList}/>
      {gistListData.length ? 
      <GistList data= {gistListData}/>
      : null}
    </div>
  );
}

export default App;

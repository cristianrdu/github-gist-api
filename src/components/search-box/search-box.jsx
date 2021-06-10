import React from 'react';

import './search-box.css';

const SearchBox = ({handleSubmit, placeholder, handleChange}) => (
    <div className='search-box'>
        <form onSubmit={handleSubmit}>
            <h1>Git Gist lists</h1>
            <p>Enter user name:</p>
            <input
            type="text"
            placeholder={placeholder}
            onChange={handleChange}
            />
            <button type='submit'> submit</button>
        </form>
    </div>
);

export default SearchBox;
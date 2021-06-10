import React from 'react';

// import './search-box.styles.css';

const SearchBox = ({handleSubmit, placeholder, handleChange}) => (

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
);

export default SearchBox;
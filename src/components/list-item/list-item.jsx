import React from 'react'

import './list-item.css';

const ListItem = ({id, files, forks}) => {
    const fileData = files[Object.keys(files)[0]]; 
    
    return (
        <div className='list-item'>
            <p>Gist id: {id}</p>
            <span>Gist File</span>
            <div>
                <p><b>File Name:</b> {fileData.filename}</p>
                <p><b>File Type:</b> {fileData.type}</p>   
                <p><b>File Content:</b> {fileData.content}</p>   
                {console.log(fileData.content)}
            </div>
        </div>
        )
}

export default ListItem;

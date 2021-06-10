import React, { useState } from 'react'
import axios from 'axios';
import ItemModal from '../item-modal/item-modal';

import './list-item.css';
 
const ListItem = ({id, files, forks}) => {
    
    const [show, setShow] = useState(false); //state for the bootstrap modal

    const [fileContent, setFileContent] = useState('');

    const fileData = files[Object.keys(files)[0]]; 

    const handleClose = () => setShow(false); 

    const handleShow = () => {
        fetchFileContentData()
        .then(data => {
            setFileContent(data);
        })
        .then(setShow(true))
        .then(console.log(fileContent));
    }

    const fetchFileContentData = async () => {
        return axios.get(fileData.raw_url)
        .then(({data}) => {
            return data;
        }).catch((error) => {
            console.log(error);
            return error;
        });
        }
    
    return (
        <>
            <div className='list-item' onClick={handleShow}>
                <p>Gist id: {id}</p>
                <span>Gist File:</span>
                <div>
                    <p><b>File Name:</b> {fileData.filename}</p>
                    <p><b>File Type:</b> {fileData.type} </p>   
                
                    <p><b>Forks:</b>
                        { forks && forks.length ?
                        <ul>
                            {forks.map(fork => (
                                <p>{fork.user}</p>
                            ))}
                        </ul>
                        : ' There are no forks for this Gist'}
                    </p>
                    <p><b>File Content:</b> {fileData.content}</p>   
                </div>
            </div>
            <ItemModal handleClose={handleClose} show={show} fileContent={fileContent} fileName={fileData.filename}/>
        </>
        )
}

export default ListItem;

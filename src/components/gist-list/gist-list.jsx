import React from 'react'
import ListItem from '../list-item/list-item'

import './gist-list.css';

const GistList = ({data}) => {
    return (
        <div className='gist-list'>
            {data.map(dataItem => (
                <ListItem key={dataItem.id} id={dataItem.id} files={dataItem.files} forks= {dataItem.forks}/>
            )
            )}
        </div>
    )
}

export default GistList

import React from 'react'
import ListItem from '../list-item/list-item'

const GistList = ({data}) => {
    return (
        <div>
            {data.map(dataItem => {
                <ListItem id={dataItem.id} files={dataItem.files} forks= {dataItem.forks}/>
            })}
        </div>
    )
}

export default GistList

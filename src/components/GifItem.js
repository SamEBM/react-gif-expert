import React from 'react'

const GifItem = ({id, title, url}) => {
    return (
        <div className='card animate__animated animate__bounceIn'>
            <img alt='gif' src={url}></img>
            <p>{title}</p>
        </div>
    )
}

GifItem.propTypes = {}

export default GifItem
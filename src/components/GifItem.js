import React from 'react';
import PropTypes from 'prop-types';

const GifItem = ({id, title, url}) => {
    return (
        <div className='card animate__animated animate__bounceIn'>
            <img alt={title} src={url}></img>
            <p>{title}</p>
        </div>
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default GifItem
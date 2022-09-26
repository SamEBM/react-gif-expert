import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = (props) => {
    const [inputValue, setInputValue] = useState('');
    const handleInput = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.length > 2) {
            props.addCategory(inputValue);
            setInputValue('');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleInput}></input>
            </form>
        </>
    )
}

AddCategory.propTypes = {
    addCategory: PropTypes.func.isRequired
}

export default AddCategory
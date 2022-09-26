import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({defaultCategories = []}) => {

    // const categories = ['Naruto', 'Demon Slayer', 'Dragon Ball', 'Attack on Titan'];
    const [categories, setCategories] = useState(defaultCategories);
    const handleAdd = (category) => {
        // No se deben mutar las variables
        // categories.push('Categoria Nueva');
        setCategories(prev => {
            return [category, ...prev];
        });
    };

    return (
        <>
            <h2>GifExpertApp</h2>
            <p>Ingresa el nombre de lo que quieres buscar:</p>
            <AddCategory addCategory={handleAdd} />
            <hr></hr>
            <ol>
                {categories.map( (category, index) => {
                    return <GifGrid key={category} category={category} />
                })}
            </ol>
        </>
    )
}

export default GifExpertApp
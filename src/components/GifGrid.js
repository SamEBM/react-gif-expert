// import React, { useEffect, useState } from 'react'
// import { getGIFS } from '../helpers/getGIFS';
import GifItem from './GifItem';
import {useFetchGIFS} from '../hooks/useFetchGIFS';

const GifGrid = ({ category }) => {
    // const [gifs, setGifs] = useState([]);

    // Custom Hook
    const { data : images, loading } = useFetchGIFS(category);

    // Esta funcion se ejecuta la primera vez que se renderiza el componente y si 'category' llega a cambiar
    // useEffect(() => {
    //     getGIFS(category).then(gifsResult => {
    //         setGifs(gifsResult);
    //     });
    // }, [category]);

    return (
        <>
            <h3 className='animate__animated animate__backInLeft'>{category}</h3>
            { loading && <p className='animate__animated animate__pulse'>Cargando...</p>}
            <div className='card-grid'>
                {
                    images.map( gif => {
                        return <GifItem key={gif.id} {...gif}/>
                    })
                }
            </div>
        </>
    );
}

GifGrid.propTypes = {}

export default GifGrid
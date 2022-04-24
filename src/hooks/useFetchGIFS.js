import { useEffect, useState } from "react";
import { getGIFS } from '../helpers/getGIFS';

export const useFetchGIFS = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGIFS(category).then(gifsResult => {

            setTimeout(() => {
                setState({
                    data: gifsResult,
                    loading: false
                });
            }, 2000);
        });
    }, [category]);

    return state;
}
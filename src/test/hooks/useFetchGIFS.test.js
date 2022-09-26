import { renderHook } from "@testing-library/react-hooks";
import { useFetchGIFS } from "../../hooks/useFetchGIFS";

describe('Pruebas con el custom hook', () => { 
    test('Debe de retornar el estado inicial', () => {
        // Esto no se puede
        // const { data, loading } = useFetchGIFS(category);
        
        // Esto si
        // const { result } = renderHook(() => useFetchGIFS('Attack on Titan'));
        // const { data, loading } = result.current;
        // expect(data).toEqual([]);
        // expect(loading).toBe(true);
    })

    test('Debe de retornar un arreglod de imagenes y loading en false', async() => { 
        const { result, waitForNextUpdate } = renderHook(() => useFetchGIFS('Attack on Titan'));
        await waitForNextUpdate({timeout: 2500});
        const { data, loading } = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })
})
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGIFS } from '../../hooks/useFetchGIFS';
jest.mock('../../hooks/useFetchGIFS');

describe('Pruebas con Gif Grid', () => { 
    const category = 'Attack on Titan';

    // Esto se ejecuta cada vez que se ejecuta un test
    // beforeEach( () => {
    //     jest.clearAllMocks();
    //     wrapper = shallow(<GifGrid category={category}/>);
    // });

    test('Debe mostrar <GifGrid /> correctamente', () => { 

        //Simular como si fuese la inicializacion del componente 
        useFetchGIFS.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar gifs cuando termina useFetchGifs', () => { 
        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/culaquier1.gif',
                title: 'Cualquier cosa1'
            },
            {
                id: 'DEF',
                url: 'https://localhost/culaquier2.gif',
                title: 'Cualquier cosa2'
            },
        ];

        // Simular que ya se obtuvo respuesta del custom Hook 
        useFetchGIFS.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifItem').length).toBe(gifs.length)
    })
})
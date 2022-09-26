import GifItem from "../../components/GifItem";
import { shallow } from 'enzyme';

describe('Pruebas con Gif Item', () => { 
    const title = 'Titulo';
    const url = 'https://localhost/algo.jpg';
    let wrapper = shallow( <GifItem title={title} url={url} /> );

    // Esto se ejecuta cada vez que se ejecuta un test
    beforeEach( () => {
        wrapper = shallow( <GifItem title={title} url={url}/> );
    });

    test('Debe mostrar <GifItem /> correctamente', () => { 
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener un parrafo con Title', () => { 
        const parrafo = wrapper.find('p');
        expect(parrafo.text().trim()).toBe(title);
    });

    test('Debe tener un parrafo con Title', () => { 
        const img = wrapper.find('img');
        expect(img.prop('src').trim()).toBe(url);
        expect(img.prop('alt').trim()).toBe(title);
    });

    test('Debe tener clase animate__bounceIn', () => { 
        const divAnimation = wrapper.find('div');
        expect(divAnimation.prop('className').includes('animate__bounceIn')).toBe(true);
    });
})
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas con la app completa', () => { 
    test('Debe mostrar <GifExpertApp /> correctamente', () => { 
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar una lista de categorias', () => { 
        const categories = ['Vegeta', 'Goku'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
})
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas con Add Category', () => { 
    const addCategory = jest.fn();
    let wrapper = shallow(<AddCategory addCategory={addCategory}/>);

    // Esto se ejecuta cada vez que se ejecuta un test
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory addCategory={addCategory}/>);
    });

    test('Debe mostrar <AddCategory /> correctamente', () => { 
        expect(wrapper).toMatchSnapshot();
    });

    // Simular cambios en un Input
    test('Debe de cambiar el input', () => { 
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: {value} });
    })

    test('No debe hacer submit', () => { 
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(addCategory).not.toHaveBeenCalled();
    })

    test('Debe llamar addCategory y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        // Simula el inputChange
        input.simulate('change', { target: {value} }); 

        // Simula el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(addCategory).toHaveBeenCalled();
        expect(input.prop('value')).toBe('');
    })
})
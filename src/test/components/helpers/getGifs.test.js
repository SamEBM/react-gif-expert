import { shallow } from 'enzyme';
import { getGIFS } from '../../../helpers/getGIFS';

describe('Pruebas con getGifs Fetch', () => { 
    test('Debe de regresar 10 gifs', async () => { 
        const gifs = await getGIFS('Attack on Titan');
        expect(gifs.length).toBe(10);
    });

    test('Debe de regresar 10 gifs', async () => { 
        const gifs = await getGIFS('');
        expect(gifs.length).toBe(0);
    })
})
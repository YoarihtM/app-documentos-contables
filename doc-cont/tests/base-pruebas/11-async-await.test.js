import { getImagen } from '../../src/base-pruebas/11-async-await.js';



describe('Pruebas en 11-async-await', () => { 

    test('getImagen debe de retornar un URL de la imagen', async() => {

        const url = await getImagen();

        console.log(url);

        expect( typeof url ).toBe('string');

    });

}) 
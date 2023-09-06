import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en getGifs()', () => { 

    test('debe de retornar un arreglo de gifs', async () => {  

        const gifs = await getGifs('One Punch');
        // console.log(gifs);

        // se evalua que lo que retorne sea un arreglo que no este vacio
        expect(gifs.length).toBeGreaterThan(0);

        // se evalua que el primer elemento del arreglo tenga la 
        // estructura que se muestra a continuacion  
        expect( gifs[0] ).toEqual( {
            id: expect.any(String), 
            title: expect.any(String), 
            url: expect.any(String), 
        })

    });

});
import { getUser } from '../../src/base-pruebas/05-funciones';


// cuando sean objetos apuntan a objetos de memoria diferente y se evalan de acuerdo
// con su espacio en memoria y no con su valor
// por eso se usa toEqual en lugar de toBe

describe('Pruebas en 05-funciones', () => { 
    test('getUser debe de retornar un objeto', () => { 
        

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        console.log(user);

        expect( testUser ).toEqual( user );

    }) 
});
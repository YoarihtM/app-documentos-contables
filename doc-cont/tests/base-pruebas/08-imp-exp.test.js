import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroById debe de retornar un heroes por ID', () => {

        const id = 1;
        const hero = getHeroeById(id);

        console.log(hero);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });

    });

    test('getHeroById debe de retornar undefined si no existe', () => {

        const id = 100;
        const hero = getHeroeById(id);

        console.log(hero);

        // false tambien puede pasar como falsy en la evaluacion
        expect(hero).toBeFalsy();

    });

    // tarea 1 
    test('getHeroesByOwner debe retornar un arreglo de tamaño 3 con los heroes de DC', () => {

        const owner = 'DC';
        const dcHeroes = getHeroesByOwner(owner);

        const heroes1 = [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            },
        ];

        expect( dcHeroes.length ).toBe( 3 );
        expect( dcHeroes ).toEqual( heroes1 );

        // Solucion real, aunque la otra no es incorrecta
        expect( heroes1 ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));

    });

    // tarea 2
    test('getHeroesByOwner debe retornar un arreglo de tamaño 2', () => {

        const owner = 'Marvel';
        const marvelHeroes = getHeroesByOwner(owner);

        expect( marvelHeroes.length ).toBe( 2 );

        // Solucion real
        expect( marvelHeroes.length ).toBe( heroes.filter( (heroe) => heroe.owner === owner ).length );

    });

})
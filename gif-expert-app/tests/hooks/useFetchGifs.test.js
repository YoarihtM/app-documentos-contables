import { renderHook, waitFor } from '@testing-library/react';

import { useFetchGifs } from '../../src/hooks/useFetchGifs';


describe('Pruebas con el hook useFetchGifs', () => { 

    test('debe de regresar el estado inicial', () => { 

        const { result } = renderHook( () => useFetchGifs('One Punch') );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBe(true);

    });

    test('debe de regresar un arreglo de imagenes y el isLoading en false', async() => { 

        // asi se renderiza el hook ya que con esto se puede simular que se esta usando desde 
        // un componente de react ya que de hecho asi es como funcionan los hooks
        const { result } = renderHook( () => useFetchGifs('One Punch') );

        // el primer parametro es un callback que siempre va con eso se evalua el test
        // el segundo parametro es un objeto con el que podemos configurar el timeout 
        // y tambien intervalos en los que se estara ejecutando la funcion
        // si no se pone el segundo parametro se establece un timeout de 1 segundo
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

    });

});
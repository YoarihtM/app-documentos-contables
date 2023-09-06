import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';


describe('Pruebas en AddCategory', () => { 

    const inputValue = 'Saitama';

    test('debe de cambiar el valor de la caja de texto', () => { 

        render(<AddCategory onNewCategory={ () => {} } />);
        const input = screen.getByRole('textbox');
        
        fireEvent.input( input, { target: { value: 'Saitama' } } );
        expect( input.value ).toBe('Saitama');

        // screen.debug();

    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {  
        // los mocks son simulaciones de funciones con los que podemos
        // evaluar si una funcion se ha ejecutado 
        const onNewCategory = jest.fn();
        
        render(<AddCategory onNewCategory={ onNewCategory } />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
        
        // screen.debug();

        expect( input.value ).toBe('');

        // Se evalua si la funcion se llamo
        expect( onNewCategory ).toHaveBeenCalled();
        
        // Se evalua que se llame la cantidad de veces que se coloca como 
        // argumento de la funcion 'toHaveBeenCalledTimes' 
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        
        // Se evalua que la funcion se llame con el valor 
        // que enviamos como argumento
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );        

    });

    test('no debe de llamar el onNewCategory si el input esta vacio', () => { 

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />);
        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).not.toHaveBeenCalled();
        // expect( onNewCategory ).not.toHaveBeenCalledWith('');


    });

});
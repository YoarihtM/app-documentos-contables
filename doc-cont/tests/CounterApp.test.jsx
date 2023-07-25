import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('pruebas en CounterApp', () => { 
    const initialValue = 10;

    test('debe de hacer match con el snapshot', () => { 

        // const { container } = render( <CounterApp/> );
        // expect( container ).toMatchSnapshot();

        // Solucion del profe
        const { container } = render( <CounterApp value={ initialValue }/> );
        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrar el valor inicial de 100 <CounterApp value={100}>', () => { 

        // render( <CounterApp value={100}/> )
        // expect( screen.getByRole('heading',  {level: 2}).innerHTML ).toContain('100');

        // Solucion del profe
        render( <CounterApp value={ 100 }/> );
        expect( screen.getByText(100) ).toBeTruthy();

    });

    // Simulación de eventos click
    test('debe de incrementar con el boton +1', () => { 

        render( <CounterApp value={ initialValue } />);
        fireEvent.click( screen.getByText('+1') );

        expect( screen.getByText('11') ).toBeTruthy();

    });
    
    test('debe de decrementar con el boton -1', () => { 

        render( <CounterApp value={ initialValue } />);
        fireEvent.click( screen.getByText('-1') );
        // screen.debug();
        expect( screen.getByText('9') ).toBeTruthy();

    });

    test('debe de reiniciar con el boton de reset', () => { 

        render( <CounterApp value={ 355 } />);
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // screen.debug();
        // fireEvent.click( screen.getByText('Reset') );
        // screen.debug();

        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

        expect( screen.getByText( 355 ) ).toBeTruthy();

    });

});
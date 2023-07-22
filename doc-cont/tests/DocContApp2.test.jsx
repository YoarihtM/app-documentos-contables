import { render, screen } from '@testing-library/react';
import { DocContApp } from '../src/DocContApp';


describe('pruebas en DocContApp', () => {

    const title = 'Hola, Soy Goku';
    const subtitle = 'Soy Goku un subtitulo';

    test('debe hacer match con el snapshot', () => { 
        
        const { container } = render( <DocContApp title={ title } />);
        expect( container ).toMatchSnapshot();
        
    });

    test('debe de mostrar el mensaje "Hola, Soy Goku"', () => { 

        // screen es lo que se muestra en la pantalla
        // es decir el renderizado del componente
        render( <DocContApp title={ title } />);
        expect( screen.getByText( title ) ).toBeTruthy();

        // screen.debug();

    });

    test('debe de mostrar el titulo en un H1', () => { 

        render( <DocContApp title={ title } />);
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );

    });

    test('debe de mostrar el subtitulo enviado por props', () => { 

        render( 
            <DocContApp 
                title = { title } 
                subtitle = { subtitle } 
            />
        );

        expect( screen.getAllByText(subtitle).length ).toBe(2);

    });

})
import { render } from '@testing-library/react';
import { DocContApp } from '../src/DocContApp';


describe('pruebas en DocContApp', () => {

    // test('debe de hacer match con el snapshot', () => {

    //     const title = 'Hola soy Goku';
    //     const { container } = render(<DocContApp title={title} />)

    //     // console.log(container);

    //     expect(container).toMatchSnapshot();

    // });

    test('debe de mostrar el titulo en un h1', () => { 
        
        const title = 'Hola soy Goku';
        const { container, getByText, getByTestId } = render( <DocContApp title={ title } /> )

        // comprueba que exista el elemento
        expect( getByText(title) ).toBeTruthy();

        // const h1 = container.querySelector( 'h1' );
        
        // comprueba que sea de forma estricta el mismo elemento o el mismo dato
        // expect(h1.innerHTML).toBe( title );

        // comprueba de forma no estricta que el dato exista dentro del renderizado
        // expect(h1.innerHTML).toContain( title );

        expect( getByTestId('test-title').innerHTML ).toContain(title);
    });

    test('debe de mostrar el titulo enviado por props', () => { 

        const title = 'Hola, Soy Goku';
        const subtitle = 'Soy un subtítulo';

        const { getAllByText } = render( 
            <DocContApp 
                title = { title } 
                subtitle = { subtitle } 
            />
        );

        expect( getAllByText(subtitle).length ).toBe(2);

    });

})
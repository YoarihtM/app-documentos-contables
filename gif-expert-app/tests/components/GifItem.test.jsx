import { render } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas de GifItem', () => { 
    
            const title = 'titulo';
            const url   = 'url';

    test('debe de hacer match con el snapshot', () => {

        const { container } = render(<GifItem title={ title } url={ url } />)
        expect(container).toMatchSnapshot();

    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {  
        
        render(
            <GifItem title={title} url={url} />
        );

        // screen.debug();

        // expect(screen.getByRole('img').src).toBe( url );
        // expect(screen.getByRole('img').alt).toBe( title );

        const { src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

    });

}); 
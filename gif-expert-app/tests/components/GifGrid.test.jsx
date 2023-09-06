import render from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';



describe('pruebas en el GifGrid ', () => { 

    const category = 'One Punch';

    test('debee de mostrar el loading inicialmente', () => {  

        render(<GifGrid />);

    });

});
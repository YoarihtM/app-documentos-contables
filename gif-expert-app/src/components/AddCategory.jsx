import { useState } from 'react';
import { PropTypes } from 'prop-types';

// No es comun ver las props, por lo regular se desestructura y
// se recibe las props que requerimos
// export const AddCategory = ( props ) => {

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {

        // console.log(target.value);
        setInputValue(target.value);

    };

    const onSubmit = ( event ) => {
        // console.log('Hola mundo desde el submit de AddCategory');
        // console.log(event);

        // Mi intento de la tarea
        // console.log(props.setCategories);
        // console.log(props.categories);
        // console.log(event.target[0].value);
        
        // props.setCategories([ ...props.categories, event.target[0].value]);
        // Fin del intento, no funciono


        // console.log(inputValue);
        
        // Solucion 1 del profe junto a validaciones

        // if( inputValue.trim().length <= 1 ) return;

        // setCategories( categories => [ ...categories, inputValue ]);
        // setInputValue('');
        
        // Solucion 2 del profe
        
        event.preventDefault();
        const newInputValue = inputValue.trim();
        
        if(newInputValue <= 1) return;
        
        onNewCategory(newInputValue);
        setInputValue('');

    };

    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
};
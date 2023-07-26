import { useState } from 'react';


export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = (event) => {

        console.log(event);
        setInputValue('Hola Mundo');

    };

    return (
        <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={(event) => onInputChange(event)}
        />
    )
}

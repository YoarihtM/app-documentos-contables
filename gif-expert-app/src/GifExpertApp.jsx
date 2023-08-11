import { useState } from "react"
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // cuando se requiere almacenar la información y esa información
    // tiene que cambiar el html se debe almacenar la información
    // se requiere un hook de react para mantener el estado

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) => {

        // console.log(newCategory)

        if(categories.includes(newCategory)) return;

        setCategories([ newCategory,...categories  ]);

        // setCategories( (c) => c.push('Valorant'));
        // categories.push('Valorant');
        // setCategories(categories)

        // Evitar usar push, por eso no se actualiza la vista
        // push muta el objeto y react evita mutar el objeto

        // setCategories( cat => [ ...cat, 'Valorant' ]);
        // setCategories(['Valorant', ...categories]);

    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
                
            />

            {categories.map(category => 
                (
                    <GifGrid 
                        key={category} 
                        category={category}
                    />
                ))
            }
        </>
    )
}

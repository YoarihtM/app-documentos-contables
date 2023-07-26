import { useState } from "react"
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    // cuando se requiere almacenar la información y esa información
    // tiene que cambiar el html se debe almacenar la información
    // se requiere un hook de react para mantener el estado

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = () => {
        // setCategories( (c) => c.push('Valorant'));
        // categories.push('Valorant');
        // setCategories(categories)

        // Evitar usar push, por eso no se actualiza la vista
        // push muta el objeto y react evita mutar el objeto

        // setCategories( cat => [ ...cat, 'Valorant' ]);
        setCategories([...categories, 'Valorant']);

    };

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory />

            {/* Listado de Gif */}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })
                }
            </ol>

        </>
    )
}

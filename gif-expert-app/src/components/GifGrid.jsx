// El orden de importación siempre va hasta arriba la funcionalidad
// de la biblioteca o framework, seguido de los componentes,
// seguido de los hooks y por último los helpers

import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    // Se usa el estado para guardar las imagenes de cada busqueda 
    // y para mostrar los titulos de las imagenes resultantes
    // ese mismo estado se usará dentro del useEffect para realizar
    // los cambios de cada busqueda y hay dos formas de hacerlo
    // const [images, setImages] = useState([]);

    // el hook useEffect sirve para disparar "Efectos secundarios"
    // luego de que se realiza una tarea
    // Tiene dos argumentos el primero es una funcion que ejecuta
    // el codigo que queremos disparar y el segundo es una lista o
    // arreglo que indica cuando se va a ejecutar el primer parametro
    // si se deja vacio significa que solo se va a ejecutar la primera
    // vez que se renderice el componente
    
    // useEffect( () => {
    //     getGifs(category);
    // }, [ ])

    // La primera forma de llamar las imagenes con useEffect
    // aqui se usa el then ya que useEffect no acepta en el 
    // primer parametro una promesa y siempre debe ser una 
    // funcion, asi se mantiene sin el uso de async/await
    
    // useEffect( () => {
    //     getGifs(category)
    //         .then( newImages => setImages(newImages));
    // }, [ ])

    // La segunda forma es usando async/await con una funcion externa
    // const getImages = async () => {
    //     const newImages = await getGifs(category);

    //     setImages(newImages);
    // }

    // y al usar el hook useEffect ya se puede llamar la funcion
    // en el primer parametro, siendo ahora si permitido
    // useEffect( () => {
    //     getImages();
    // }, [ ])


    //////////////////////////////////////////////////////////////////////

    // En esta nueva sección se va a realizar un custom hook con lo cual
    // todo el código que está arriba va a dejar de usarse y se reemplazará
    // por el custom hook que va a realizar toda la lógica que lleva a cabo
    // dicho código, con este custom hook se busca implementar DRY ya que
    // es parte del principio el poder usar ese hook en otros componentes

    const { images, isLoading } = useFetchGifs(category);

    return (

        <>
            <h3>{category}</h3>

            { 
                // isLoading ? <h2>Cargando...</h2> : null 
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {
                    images.map( (image) => (
                        // <li key={id}>{ title }</li>
                        <GifItem 
                            key={image.id} 
                            // title={image.title} 
                            // url={image.url} 
                            { ...image }
                        />
                    ))
                }
            </div>



        </>

    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired

};
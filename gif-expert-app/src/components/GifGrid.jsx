import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    // Se usa el estado para guardar las imagenes de cada busqueda 
    // y para mostrar los titulos de las imagenes resultantes
    // ese mismo estado se usará dentro del useEffect para realizar
    // los cambios de cada busqueda y hay dos formas de hacerlo
    const [images, setImages] = useState([]);

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
    const getImages = async () => {
        const newImages = await getGifs(category);

        setImages(newImages);
    }

    // y al usar el hook useEffect ya se puede llamar la funcion
    // en el primer parametro, siendo ahora si permitido
    useEffect( () => {
        getImages();
    }, [ ])

    return (

        <>
            <h3>{category}</h3>
            <ol>
                {
                    images.map( ({id, title}) => (
                        <li key={id}>{ title }</li>
                    ))
                }
            </ol>



        </>

    )
}

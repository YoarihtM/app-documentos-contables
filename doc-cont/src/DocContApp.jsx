import PropTypes from 'prop-types';

const titulo = 'Documentos Contables';
const funcPrueba = () => 'Valor';

export const DocContApp = ({ title, subtitle }) => {

    // console.log( props );

    // if( !title ) throw new Error('El "title" no existe');

    return (
        <>
            <h1> { title } </h1>
            <h4> { subtitle } </h4>
            <p> { funcPrueba() } </p>
            <div>hola</div>
        </>
    );
};

import PropTypes from 'prop-types';

const titulo = 'Documentos Contables';
const funcPrueba = () => 'Valor';

export const DocContApp = ({ title, subtitle, name }) => {

    // console.log( props );

    // if( !title ) throw new Error('El "title" no existe');

    return (
        <>
            <h1> { title } </h1>
            <h4> { subtitle } </h4>
            <p> { name } </p>
        </>
    );
};

DocContApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    name: PropTypes.string
}

DocContApp.defaultProps = {
    title: 'No hay título',
    subtitle: 'No hay subtítulo',
    name: 'Yoariht Macedo'
}


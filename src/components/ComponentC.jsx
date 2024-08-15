import PropTypes from 'prop-types';

const ComponentC = (props) => {

    return (
        <fieldset>
            <h1>ComponentC</h1>
            <h2>{props.message}</h2>
        </fieldset>
    )
}

// Define the prop types for ComponentC
ComponentC.propTypes = {
    message: PropTypes.string.isRequired // message prop is required and should be a string
};

export default ComponentC;

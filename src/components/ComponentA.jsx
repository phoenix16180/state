import PropTypes from 'prop-types';

const ComponentA = (props) => {

    return (
        <fieldset>
            <h1>ComponentA</h1>
            <h2>count state value from App component: {props.count}</h2>
            <button onClick={() => props.increaseCount()} >Increase</button>
            <button onClick={() => props.decreaseCount()} >Decrease</button>
        </fieldset>
    );
};

ComponentA.propTypes = {
    count: PropTypes.number.isRequired,
    increaseCount: PropTypes.func.isRequired,
    decreaseCount: PropTypes.func.isRequired
};

export default ComponentA;

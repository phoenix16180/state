import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponentA from './components/ComponentA';

function App() {
    // Defining the state variable: count
    const [count, setCount] = useState(0)

    // Function to update the state variable, we pass the parameter to update the state
    const updateState = (param) => {
        setCount((prevState) => {
            return prevState + param
        })
    }

    const increaseCount = () => {
        setCount(count + 1)
    }

    const decreaseCount = () => {
        setCount(count - 1)
    }

    return (
        <fieldset>
            <h1>App</h1>
            {/* Simple state change: */}
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>

            {/* Dependable state change via a function call: */}
            <h1>Count: {count}</h1>
            <button onClick={() => updateState(+1)}>Increase</button>
            <button onClick={() => updateState(-1)}>Decrease</button>

            {/* Passing state into a child component: */}
            <ComponentA
                count={count}
                increaseCount={increaseCount}
                decreaseCount={decreaseCount}
            />
        </fieldset>
    )
}

export default App
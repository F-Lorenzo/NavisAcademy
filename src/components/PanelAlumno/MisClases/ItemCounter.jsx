import React, { useState } from 'react'

const useCounter = () => {
    const [ counter, setCounter ] = useState(0);

    const increase = () => setCounter( counter + 1 );
    const decrease = () => setCounter( counter - 1 );
    const reset = () => setCounter(0);

    return {
        counter,
        increase,
        decrease,
        reset
    }
}

const ItemCounter = ({comprarClases}) => {

    const { counter, increase, decrease, reset } = useCounter();

    const handleCompra = () => {
        comprarClases(counter);
        reset(counter);
    }

    return (
        <div>
            <div>{counter}</div>
            <button onClick={decrease} disabled={counter===0}>-</button>
            <button onClick={increase}>+</button>
            <button onClick={reset}>Reset</button>
            <br/>
            <div>  
            <button className="button__Card" onClick={handleCompra} disabled={counter === 0}>Adquirir Clases</button>
            </div>
        </div>
    )
}

export default ItemCounter

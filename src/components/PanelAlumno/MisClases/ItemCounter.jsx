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
        swal("Muy Bien", `Adquiriste ${counter} nuevas clases`, "success");
        comprarClases(counter);
        reset(counter);
    }

    return (
        <div>
            <div>{counter}</div>
            <button onClick={decrease} disabled={counter===0}>-</button>
            <button onClick={increase}>+</button>
            <button onClick={reset}>Reset</button>
            <button onClick={handleCompra} disabled={counter === 0}>Comprar Clases</button>
        </div>
    )
}

export default ItemCounter

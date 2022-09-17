import React from 'react'
import { useState } from 'react'
import ItemCounter from './ItemCounter'

const MisClases = () => {

    const [ clasesDisponibles, setClasesDisponibles ] = useState(0);
    const [ clasesUsadas, setClasesUsadas ] = useState(0);

    const comprarClases = ( nuevas ) => {
        setClasesDisponibles( clasesDisponibles + nuevas );
    }

    const handleInicioDeClase = () => {
        setClasesUsadas( clasesUsadas + 1);
        setClasesDisponibles( clasesDisponibles - 1 );
    }

    return (
        <div>
            <div>
                <h3>COMPRAR CLASES</h3>
                <ItemCounter comprarClases={comprarClases}/>
            </div>

            <div>
                <h3>CANTIDAD DE CLASES DISPONIBLES : { clasesDisponibles }</h3>
            </div>

            <div>
                <h3>CANTIDAD DE CLASES USADAS : { clasesUsadas } </h3>
            </div>

            <div>
                <button disabled={clasesDisponibles === 0}><h3>PROGRAMAR CLASES</h3></button>
            </div>

            <div>
                <button onClick={handleInicioDeClase} disabled={clasesDisponibles === 0}><h3>CONFIRMAR INICIO DE CLASE</h3></button>
            </div>
      
        </div>
    )
}

export default MisClases

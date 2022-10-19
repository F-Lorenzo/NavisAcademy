import React from 'react';
import { DateTime } from 'luxon';


const LuxonTIme = () => {

    const now = DateTime.now();
    let actualDate = now.toFormat("DDDD - HH:mm:ss");
    console.log(now.year, now.month, now.day)

    return (
        <div>
            <h3>ACTUAL DATE : {actualDate} </h3>
        </div>
    )

}

export default LuxonTIme    
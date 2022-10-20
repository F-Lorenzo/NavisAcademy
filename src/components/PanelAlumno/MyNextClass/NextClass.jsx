import React from 'react'

const NextClass = (myClass) => {

    /*console.log(myClass);*/

    return (
        <div className='next-class-container'>

            <div className='class__Body'>
                <div>
                    <h3>{myClass.time} HS</h3>
                    <p>Professor: Unasigned</p>
                </div>

                <p>Your next class is about to begin</p>

                <span className='class__button-start'>Start Class</span>
                <span className='class__button-end'>Reprogram Class</span>
            </div>

        </div>
    )
}

export default NextClass

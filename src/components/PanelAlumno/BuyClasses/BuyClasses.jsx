import React from 'react'
import CardClasses from './CardClasses'

const BuyClasses = () => {

    return (
        
        <div>

            <div className='buy-container'>

                <h3>BUY CLASSES</h3>

                    <div className='buy-card-container'>

                        <CardClasses number='01'
                        price='9.55'
                        amount='60'
                        duration='50'
                        includes='2 digital books: practice and theory'
                        />      

                        <CardClasses number='02'
                        price='10.99'
                        amount='30'
                        duration='50'
                        includes='2 digital books: practice and theory'
                        />

                        <CardClasses number='03'
                        price='13.55'
                        amount='20'
                        duration='50'
                        includes='2 digital books: practice and theory'
                        />

                        <CardClasses number='04'
                        price='16.99'
                        amount='10'
                        duration='50'
                        includes='2 digital books: practice and theory'
                        />

                        <CardClasses number='05'
                        price='22.99'
                        amount='5'
                        duration='50'
                        includes='2 digital books: practice and theory'
                        />   

                    </div>

                    <div className='buy-card-container'>

                        <CardClasses number='01'
                        price='6.55'
                        amount='60'
                        duration='30'
                        includes='2 digital books: practice and theory'
                        />      

                        <CardClasses number='02'
                        price='7.99'
                        amount='30'
                        duration='30'
                        includes='2 digital books: practice and theory'
                        />

                        <CardClasses number='03'
                        price='9.55'
                        amount='20'
                        duration='30'
                        includes='2 digital books: practice and theory'
                        />

                        <CardClasses number='04'
                        price='12.55'
                        amount='10'
                        duration='30'
                        includes='2 digital books: practice and theory'
                        />

                        <CardClasses number='05'
                        price='16.99'
                        amount='5'
                        duration='30'
                        includes='2 digital books: practice and theory'
                        />   

                    </div>

            </div>

        </div>

    )

}

export default BuyClasses

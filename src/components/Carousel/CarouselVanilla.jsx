import React, { useState } from 'react';
import img00 from '../../assets/imgCarouselHome/img00.jpg';
import img01 from '../../assets/imgCarouselHome/img01.jpg';
import img02 from '../../assets/imgCarouselHome/img02.jpg';
import "./CarouselVanilla.css";




const CarouselVanilla = () => {

    const images = [ img00, img01, img02 ];
    const [ selectedIndex, setSelectedIndex ] = useState(0);
    const [ selectedImage, setSelectedImage ] = useState(images[0]);
    const [ loaded, setLoaded ] = useState(false);

    const selectNewImage = (index, images, next = true ) => {
        setLoaded(false);        
        setTimeout( () => {
            const condition = next ? index < images.length - 1 : index > 0;
            const nextIndex = next ? (condition ? index + 1 : 0) : (condition ? index - 1 : images.length - 1);
            setSelectedImage(images[nextIndex]);
            setSelectedIndex(nextIndex);
        }, 500);
    }

    const previous = () => {
        selectNewImage(selectedIndex, images, false);
    };

    const next = () => {
        selectNewImage(selectedIndex, images);
    }
    
    return (
        <div className='carousel-container'>
            <img src={selectedImage} alt="img"  onLoad={() => setLoaded(true)}/>
            <button className='boton-der' onClick={previous}> <i className="fa-solid fa-circle-chevron-left"></i> </button>
            <button className='boton-izq' onClick={next}> <i className="fa-solid fa-circle-chevron-right"></i> </button>
        </div>
    )

}

export default CarouselVanilla

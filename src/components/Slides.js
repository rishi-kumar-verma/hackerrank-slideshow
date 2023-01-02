import React, { useState } from 'react';

function Slides({slides}) {

    let [slideState, setSlideSlide] = useState(0);

    let restart =()=>{
        setSlideSlide(0)
    }

    let prev =()=>{
        if(slideState > 0){
            setSlideSlide((prevState)=> prevState - 1);
        }
    }
    let next =()=>{
        if(slideState < slides.length-1){
            setSlideSlide((prevState)=> prevState + 1);
        }
    }


    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" onClick={restart} className={`${slideState !== 0 ? "small":"small outlined"}`} >Restart</button>
                <button data-testid="button-prev" onClick={prev} className={`${slideState !== 0 ? "small":"small outlined"}`}>Prev</button>
                <button data-testid="button-next" onClick={next} className={`${slideState !== slides.length -1 ? "small":"small outlined"}`}>Next</button>
            </div>
            {slides.map((slide, index)=>{
                return ( slideState === index ? <div id="slide" key={index} className="card text-center">
                            <h1 data-testid="title">{slide.title}</h1>
                            <p data-testid="text">{slide.text}</p>
                        </div>:'')
            })

            }
            
        </div>
    );

}

export default Slides;

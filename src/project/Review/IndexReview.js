import React, { useState } from 'react'
import data1 from '../../data1';
import { FaGithub, FaPeopleArrows } from 'react-icons/fa'
import { FcNext, FcPrevious } from 'react-icons/fc'

const IndexReview = () => {
    const [index, setIndex] = useState(0);
    const {name, age, image, data} = data1[index];

    const checkNumber = (number) => {
        if(number > data1.length - 1){
            return 0;
        }
        if(number < 0){
            return data1.length - 1
        }
        return number;
    }

    const Random = () => {
        let randomNumber = Math.floor(Math.random() * data1.length);
        if(randomNumber === index){
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    }

    const Next = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };
    const Prev = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };
    return (
        <main>
            <section>
                <div className="container">
                    <h2 className="col-sm-3 offset-md-5">Review</h2>
                    <img src={image} class="img-thumbnail" alt={name} className="col-sm-3 offset-md-4"></img>
                    <h3 className="col-sm-3 offset-md-5">{name} <span className="fs-6">({age})</span></h3>
                    <p className="col-sm-4 offset-md-4">{data}</p>
                    <div>
                    <button type="button" class=" btn btn-outline-primary col-sm-1 offset-md-4" onClick={Prev}><FcPrevious /></button>
                    <button type="button" class=" btn btn-outline-primary col-sm-1" onClick={Random}>random</button>
                    <button type="button" class="btn btn-outline-primary col-sm-1" onClick={Next}><FcNext /></button>
                    </div>
                    
                </div>
            </section>
        </main>
    )
}

export default IndexReview

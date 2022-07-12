import React, { useState } from 'react';
import { Component } from 'react';
import Elem from './Elem';
import './styles/ElemList.css';


const ElemList = (props:any) => {

    const [x,setX] = useState(0);
    const moveLeft=()=>{
        console.log(x);
        x<=0 ? setX(0) : setX(x+40*(props.elements.length/7)) ;
    }
    const moveRight=()=>{
        console.log(x);
        console.log(-40*(props.elements.length/7))
        x<=(-40*(props.elements.length/7)) ? setX(0) : setX(x-40*(props.elements.length/7)) ;
        if(x>0){
            setX(0)
        }
    }

    return (
        <div className='ElementContainer'>
            <div className={`leftarrow ${x==0 ? 'hide-arrow' : ''}`}>
                <span className="material-icons md-48" onClick={moveLeft}>
                keyboard_arrow_left
                </span>
            </div>
            <div className='All-Elems' style={{transform:`translateX(${x}%)`}}>
                {props.elements.map(
                    (elem:any) =>
                    <div key={elem.imdbID} className="single-Elem">
                        <Elem key={elem.imdbID} Poster={elem.Poster} Title={elem.Title}/> 
                    </div>   
                    
                )}
            </div>
            

            <div className='rightarrow'>
                <span className="material-icons md-48" onClick={moveRight}>
                keyboard_arrow_right
                </span>
            </div>
            
        </div>
    );
}

export default ElemList;
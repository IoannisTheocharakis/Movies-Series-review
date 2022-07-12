import React from 'react';
import { Component } from 'react';
import './styles/Elem.css';

const Elem = (props:any) => {


    return (
        <div className='Elem'>
                <div>
                    <img src={props.Poster} alt={props.Poster} />
                </div>
                {/* <div>
                    {props.Title}
                </div> */}
        </div>
    );
}

export default Elem;
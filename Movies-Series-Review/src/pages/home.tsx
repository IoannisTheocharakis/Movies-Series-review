import React from 'react';
import homeCSS from './styles/home.module.css';
import DropDownSort from '../components/DropDownSort';
import ElemList from '../components/ElemList';

const home = (props:any) => {


    return (
        
        <div className={homeCSS.mainContainer}>
            <div className={homeCSS.DropDown}>
            <DropDownSort />
            </div>

            <div>
                <span className={homeCSS.title}>
                    Movies
                </span>
                <ElemList elements={props.elementsMovies}/>
                <span className={homeCSS.title}>
                    Series
                </span>
                <ElemList elements={props.elementsSeries}/>
            </div>
            
        </div>
        
    );
}

export default home;
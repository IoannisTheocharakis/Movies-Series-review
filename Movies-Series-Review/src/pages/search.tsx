import React from 'react';
import searchCSS from './styles/search.module.css';
import DropDownSort from '../components/DropDownSort';
import ElemList from '../components/ElemList';

const Search = (props:any) => {




    return (
        
        <div className={searchCSS.mainContainer}>
            <div className={searchCSS.DropDown}>
                <span className={searchCSS.search_statue}>
                    Search for “{props.title}”
                </span>
                <DropDownSort/>
            </div>

            <div>
            
                <span className={searchCSS.title}>
                    Movies
                </span>
                <ElemList elements={props.elementsMovies}/>
                <span className={searchCSS.title}>
                    Series
                </span>
                <ElemList elements={props.elementsSeries}/>
                <span className={searchCSS.title}>
                    Other
                </span>
                <ElemList elements={props.elements}/>
            </div>
            
        </div>
        
    );
}

export default Search;
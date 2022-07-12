import React,{useEffect,useState} from 'react';
import { Component } from 'react';
import SearchForm from "./SearchForm"
import './styles/Navbar.css'
import { useNavigate ,Link} from 'react-router-dom';

const Navbar = (props:any) => {
    let navigate = useNavigate();
    return (
        <nav className='navbar'>
            <div className="nav-left">
                <div className="logo">
                    JACFLIX
                </div>
                <div className="menu-buttons" >
                    <Link onClick={()=>{
                        props.setElementsSeries(props.tmpSeries);
                        props.setElementsMovies(props.tmpMovies);
                        props.setTitle('')
                    }}  to='/home'>
                        Home
                    </Link>
                    <Link to='/search'>
                        Movies
                    </Link>
                    <Link to='#'>
                        Series
                    </Link>
                    <Link to='#'>
                        News
                    </Link>
                    <Link to='#'>
                        Popular
                    </Link>
                </div>
            </div>
            <div className="nav-right">
                <SearchForm config_key={props.config_key} setElements={props.setElements} elementsMovies={props.elementsMovies} setElementsMovies={props.setElementsMovies} elementsSeries={props.elementsSeries} setElementsSeries={props.setElementsSeries} title={props.title} setTitle={props.setTitle}/>
            </div>
        </nav>
    );
}

export default Navbar;
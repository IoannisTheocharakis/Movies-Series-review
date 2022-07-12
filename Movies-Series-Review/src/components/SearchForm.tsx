import React,{useEffect,useState} from 'react';
import { Component } from 'react';
import "./styles/SearchForm.css"
import { useNavigate } from 'react-router-dom';


const SearchForm = (props:any) => {
    
    let navigate = useNavigate();
    const [tmpTitle,setTmpTitle] = useState("");
    let exist = 0;
    let myRef = React.createRef();
    const SearchApiRequest = async (searchValue: string) => {
        if (searchValue) {
            const url = `http://www.omdbapi.com/?apikey=${props.config_key}&s=${searchValue}`

            const response = await fetch(url)
            const responseJson = await response.json()
            
            if (responseJson.Search) {
                console.log(responseJson.Search);

                let tmpSeries = [];
                let tmpMovies = [];
                let tmpOther = [];
                for(let i = 0 ;  i < responseJson.Search.length; i++){
                    console.log(1);
                    if(responseJson.Search[i].Type === "movie"){
                        console.log(2);
                        tmpMovies.push(responseJson.Search[i]);
                    }else if(responseJson.Search[i].Type === "series"){
                        tmpSeries.push(responseJson.Search[i]);
                    }else{
                        tmpOther.push(responseJson.Search[i]);
                    }
                }
                props.setElements(tmpOther)
                props.setElementsSeries(tmpSeries);
                props.setElementsMovies(tmpMovies);
                exist=1;
            }else{
                exist=0;
            }
        }
    }

    //useEffect for search bar
    useEffect(() => {
        console.log(1);
        SearchApiRequest(props.title);
    }, [props.title])

    //when we change the value of search bar
    const onChangeHandler = (e:any) =>{
        setTmpTitle(e.target.value);
    }

    //when we press button
    const submitHandler = (e:any) =>{
        e.preventDefault();
        if(tmpTitle!=""){
            props.setTitle(tmpTitle);
        }
        
    }

    return (
    <div className='SearchElem'>
        <input type="search" placeholder="Enter Title" onChange={onChangeHandler}/>
        <input type="submit" id="searchbtn" value="Search" onClick={submitHandler} />
        <label htmlFor="searchbtn">
            <span className="material-icons" onClick={()=>{
                navigate('/search');
            }}>
                search
            </span>
        </label>

    </div>
    );
    
}
 
export default SearchForm;

import React , {useState,useEffect, useDeferredValue} from 'react';
import "./pages/styles/App.css"
//import pages
import Home from "./pages/home"
import Search from './pages/search';
//importing components
import Navbar from "./components/Navbar"
//secrete keys
import config from "./config.json"
//navigate to other pages
import  { BrowserRouter as Router,Routes,Route,Link,Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//tmp Movies-Series to show up on Homescreen
const tmpSeries= [{"Title":"Stranger Things","Year":"2016","imdbID":"tt4574334","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BODZlYjQ4NzYtZTg1MC00NGY4LTg4NjQtNGE3ZjRkMjk3YjMyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"},{"Title":"The Stranger","Year":"2020","imdbID":"tt9698480","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BNWNlYzA2OWUtMWE1Mi00ZjMyLWExY2ItZDVlZmQ0YTMyZmEyXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_SX300.jpg"},{"Title":"Stranger","Year":"2017–","imdbID":"tt6461346","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BZWQ3MmFiNTctMzZkMS00NGY1LWI3ZTEtZjM4ZjJlY2VmMjY3XkEyXkFqcGdeQXVyNDU4MDQ0MjM@._V1_SX300.jpg"},{"Title":"Doctor Stranger","Year":"2014","imdbID":"tt3693414","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BMTc5YTAwMWQtZDBlNS00OTAzLWJlYzYtODVmMTRmYjVhMWE4XkEyXkFqcGdeQXVyMzE4MDkyNTA@._V1_SX300.jpg"},{"Title":"The Deliberate Stranger","Year":"1986","imdbID":"tt0090925","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BMjU2NjQ4MjQ2OF5BMl5BanBnXkFtZTcwMzY3NjMyMQ@@._V1_SX300.jpg"},{"Title":"Beyond Stranger Things","Year":"2017","imdbID":"tt7570990","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BZDdhMzRiMmUtZjVlMi00OWE1LTliYmMtODM3MTk5ZTJkNDFhXkEyXkFqcGdeQXVyNjkyOTA1NjY@._V1_SX300.jpg"},{"Title":"The Stranger","Year":"2020","imdbID":"tt10681780","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BMjUwYmZmYzUtZjEwNS00ZTE1LWJjOGQtNzBlMmFhMzIxMmJlXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_SX300.jpg"},{"Title":"Stranger Things: Spotlight","Year":"2018","imdbID":"tt11225622","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BMDRjYWI5NTMtZTYzZC00NTg4LWI3NjMtNmI3MTdhMWQ5MGJlXkEyXkFqcGdeQXVyNTg4MDc4Mg@@._V1_SX300.jpg"},{"Title":"Stranger Things","Year":"2008–2009","imdbID":"tt1460534","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BNjY2NTkzODY0MV5BMl5BanBnXkFtZTgwNjk3NDA1OTE@._V1_SX300.jpg"},{"Title":"Hello, Stranger","Year":"2020","imdbID":"tt12545754","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BNGMzZjhmNjgtZDkwZi00M2E3LTljMjQtYjZhNDJkYjgzY2MzXkEyXkFqcGdeQXVyNjE2MjUwNTk@._V1_SX300.jpg"}];
const tmpMovies= [{"Title":"The Avengers","Year":"2012","imdbID":"tt0848228","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"},{"Title":"Avengers: Endgame","Year":"2019","imdbID":"tt4154796","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"},{"Title":"Avengers: Infinity War","Year":"2018","imdbID":"tt4154756","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"},{"Title":"Avengers: Age of Ultron","Year":"2015","imdbID":"tt2395427","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"},{"Title":"The Avengers","Year":"1998","imdbID":"tt0118661","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"},{"Title":"The Avengers: Earth's Mightiest Heroes","Year":"2010–2012","imdbID":"tt1626038","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"},{"Title":"Ultimate Avengers: The Movie","Year":"2006","imdbID":"tt0491703","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg"},{"Title":"Ultimate Avengers II","Year":"2006","imdbID":"tt0803093","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"The Avengers","Year":"1961–1969","imdbID":"tt0054518","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BZWQwZTdjMDUtNTY1YS00MDI0LWFkNjYtZDA4MDdmZjdlMDRlXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"},{"Title":"Avengers Assemble","Year":"2012–2019","imdbID":"tt2455546","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg"}];
function App() {
  let navigate_start = useNavigate();
  const[elements,setElements] = useState([]); // all together , prob no need
  const[elementsSeries,setElementsSeries] = useState<{}[]>([]);
  const[elementsMovies,setElementsMovies] = useState<{}[]>([]);
  const[title,setTitle] = useState("");

  //when we start init 2 tables
  useEffect(()=>{
    setElementsMovies(tmpMovies);
    setElementsSeries(tmpSeries);
  },[])


  return (
    
      <div className="App" onLoad={()=>{
        window.onload=()=>{
          navigate_start('/home');
        }
        
      }}>
        <Navbar tmpSeries={tmpSeries} tmpMovies={tmpMovies} config_key={config.MY_KEY} elementsMovies={elementsMovies} setElementsMovies={setElementsMovies} elementsSeries={elementsSeries} setElementsSeries={setElementsSeries} setElements={setElements} title={title} setTitle={setTitle}/>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="/home" element={<Home elementsMovies={elementsMovies} elementsSeries={elementsSeries}/>}/>
            <Route path="/search" element={<Search title={title} elements={elements}elementsMovies={elementsMovies} elementsSeries={elementsSeries}/>}/>
          </Routes>
        </main>
        
        {/* footerlater */}
      </div>

    
  );
}

export default App;

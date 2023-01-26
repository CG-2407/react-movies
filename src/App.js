import {useEffect, useState} from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';

//a7eff545

const API_URL = 'http://www.omdbapi.com?apikey=a7eff545';


const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    
    const searchMovies = async (title) => {
        console.log(title.searchTerm);
        const response = await fetch(`${API_URL}&s=${title.searchTerm}`);
        const data = await response.json();
        console.log(data);

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Batman');
    }, [])
    
    return(
        <div className='app'>
            <h1>MovieLand</h1>
            <div className='search'>
                <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for movies"
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies({searchTerm})}
                />
            </div>

            {
                movies.length >0
                ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))}
                    </div>

                ) : (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )

            }
            
            
        </div>
    );
}

export default App;
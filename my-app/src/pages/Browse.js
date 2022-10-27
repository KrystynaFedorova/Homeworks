import {useEffect, useMemo, useState} from "react";
import API from '../api/api';
import debounce from 'lodash.debounce';
import {useNavigate} from 'react-router-dom'

const Browse = () => {
    const navigate = useNavigate()
    const [browseFilms, setBrowseFilms] = useState([])
    const [inputFilm, setInputFilm] = useState('')
    const [searchList, setSearchList] = useState([])
    const fetchFilms = async (params, setter) => {
        const response = await API({
            method: "Get",
            params
        })
        if (response.data.Search) {
            setter(response.data.Search)

        } else {
            setter([])
        }
    }

    useEffect(() => {
        fetchFilms({s: 'Avengers Endgame', r: 'json', page: '1'}, setBrowseFilms)
    }, [])

    useEffect(() => {
        if (inputFilm !== '') {
            fetchFilms({s: inputFilm, r: 'json', page: '1'}, setSearchList)
        }
    }, [inputFilm])
    const changeHandler = (event) => {
        setInputFilm(event.target.value)
    }
    const debouncedChangeHandler = useMemo(
        () => debounce(changeHandler, 300)

        , [])

    const onFilmClick = (id) => {
        navigate(`/title/${id}`)
    }
    return browseFilms.length === 0 ?
        <div>Loading</div>
        :
        (
            <div className="browse">
                <input onChange={debouncedChangeHandler} placeholder="Search films"/>
                <ul>
                    {searchList.map(searchFilm => <li onClick={() => {
                            onFilmClick(searchFilm.imdbID)
                        }} key={`list=${searchFilm.imdbId}`}>{searchFilm.Title}</li>
                    )}
                </ul>


                <div>
                    {browseFilms.map(film => {
                        return (
                            <div onClick={() => {
                                onFilmClick(film.imdbID)
                            }} key={film.imdbID}>
                                <img src={film.Poster} alt={film.Title}/>
                                <h3>{film.Title}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
}
export default Browse

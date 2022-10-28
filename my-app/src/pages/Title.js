import {useEffect} from "react";
import {useParams} from "react-router-dom";
import API from '../api/api'
import {useDispatch, useSelector} from 'react-redux';
import {fetchFilmById} from "../store/features/films/thunk";

const Title = () => {
    const {id} = useParams()
    const film = useSelector((state) => state.films.selectedFilm)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFilmById({r:'json', i:id}))
    }, [dispatch, id]);

    return (
        <div>
            {film ?
                <div>
                    {film.Title}{film.Year}{film.Rate} {film.Released} {film.Genre}
                </div> : <div>Loading</div>
            }
        </div>
    )

}

export default Title
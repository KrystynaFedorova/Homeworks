import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import API from '../api/api'

const Title = () => {
    const {id} = useParams()
    const [film, setFilm] = useState()
    useEffect(() => {
        const fetchFilms = async () => {
            const response = await API({
                method: 'GET',
                params: {r: 'json', i: id},
            })
            setFilm(response.data)
        }
        fetchFilms()
    }, [id]);

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
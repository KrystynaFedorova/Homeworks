import axios from 'axios'

const API=axios.create({
    baseUrl:'https://movie-database-alternative.p.rapidapi.com/',

    headers: {
        'X-RapidAPI-Key': '3c928afc5bmsh957240f8a62486bp1a0789jsnc14c070fc36e',
        'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
    }
});

export default API
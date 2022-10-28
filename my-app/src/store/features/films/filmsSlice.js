import {createSlice} from '@reduxjs/toolkit'
import {fetchBrowseFilms, fetchFilmById, fetchSearchFilms} from './thunk'


const initialState = {
    browseFilms: [],
    selectedFilm: {},
    searchList: []
}
const filmsSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFilmById.fulfilled, (state, action) => {
            state.selectedFilm = {...action.payload}
        })

        builder.addCase(fetchSearchFilms.fulfilled, (state, action) => {
            state.searchList = [...action.payload]
        })

        builder.addCase(fetchBrowseFilms.fulfilled, (state, action) => {
            state.searchList = [...state.browseFilms, ...action.payload]
        })
    }
})

export default filmsSlice.reducer






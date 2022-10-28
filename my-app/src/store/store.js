import {configureStore} from "@reduxjs/toolkit";
import filmReducer from './features/films/filmsSlice'
import usersReducer from './features/users/usersSlice'

export const store=configureStore({
    reducer:{
        films:filmReducer,
        users:usersReducer
    }
})











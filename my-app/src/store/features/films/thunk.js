import {createAsyncThunk} from '@reduxjs/toolkit'
import API from '../../../api'

export const fetchFilmById=createAsyncThunk(
    'films/fetchFilmById',
    async (params)=>{
        const responce=await API({
            method:'GET',
            params
        })
        return responce.date
    }
)
export const fetchBrowseFilms=createAsyncThunk(
    'films/browse',
    async (params)=>{
        const responce=await API({
            method:'GET',
            params
        })
        return responce.date.Search
    }
)

export const fetchSearchFilms=createAsyncThunk(
    'films/search',
    async (params)=>{
        const responce=await API({
            method:'GET',
            params
        })
        return responce.date.Search
    }
)

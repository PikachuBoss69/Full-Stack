import {configureStore} from '@reduxjs/toolkit'
import searchReducer from './features/searchSlice'
import CollectionReducer from './features/collectionSlice'

export const store = configureStore({
    reducer:{
         search: searchReducer,
         collection: CollectionReducer
    }
})
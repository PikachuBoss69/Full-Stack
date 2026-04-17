import { createSlice } from "@reduxjs/toolkit";
import {Bounce, toast} from 'react-toastify'

const collectionSlice = createSlice({
    name:'collection',
    initialState:{
        item:JSON.parse(localStorage.getItem('collection')) || '[]'
    },
    reducers:{
        addCollection(state, action){
            const alreadyexist = state.item.find((item)=>{
                item.id === action.payload.id
            })
            if(!alreadyexist){
                state.item.push(action.payload);
                localStorage.setItem('collection',JSON.stringify(state.item))
            }
        },
        removeCollection(state, action){
            
                state.item = state.item.filter(
                    (item) => item.id !== action.payload.id
                )
            
            localStorage.setItem('collection',JSON.stringify(state.item))
        },
        clearCollection(state, action){
            state.item = []
            localStorage.removeItem('collection')
        },
        addToast(){
            toast.success('Added To Collection ✅', {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                    });
        },
        removeToast(){
            toast('Removed From Collection ✅', {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                    });
        }

    }

})

export const {addCollection, removeCollection, clearCollection, addToast, removeToast} = collectionSlice.actions ;
export default collectionSlice.reducer;
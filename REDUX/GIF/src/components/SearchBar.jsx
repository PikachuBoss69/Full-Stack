import React from 'react';
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { setQuery } from '../redux/features/searchSlice';

function SearchBar() {
    const dispatch = useDispatch();

    const [text, setText] = useState("");
    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(setQuery(text));
        setText("");
    }

  return (
    <div className=''>
      <form className='flex justify-center p-10 gap-5 bg-black' onSubmit={(e)=>{
      
        submitHandler(e);
      }}>
        <input className='border-2 w-full px-5 py-3 outline-none bg-white-400 text-black rounded text-xl bg-amber-50' placeholder='Write Something' type='text' value={text} onChange={(e)=>{
            setText(e.target.value);
        }}></input>
        <button className='px-4 py-2 rounded bg-gray-800 text-white active:scale-95'>Submit</button>
      </form>
    </div>
  );
}

export default SearchBar;

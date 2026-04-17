import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../redux/features/searchSlice';

function Tabs() {
    const tab = ['photos','videos','gif'];
    const dispatch = useDispatch();
    const activeTab = useSelector((state)=>state.search.activeTab);

  return (
    <div className='flex gap-10 p-6 bg-gray-900'>
      {  tab.map((elem, idx) => {
        return(            
            <button key={idx} className={`rounded-xl p-2 active:scale-95 w-20 cursor-pointer border-2 ${
                activeTab === elem ? 'bg-green-400' : 'bg-gray-700'
                }`} onClick={()=>{
                dispatch(setActiveTab(elem))
            }}>
        {elem}
      </button>
      )})
    }
    </div>
  );
}

export default Tabs;

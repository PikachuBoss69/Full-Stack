import { useState } from 'react'
import { X } from 'lucide-react';

function App() {
  const [count, setCount] = useState(0)

  function incrementCount(){
    setCount(count+1);
  }
  function decrementCount(){
    setCount(count-1);
  }
  function resetCounter(){
    setCount(0);
  }

  return (
    <div className='container'>
      <div className='upper'>
          <h3 className='u-heading'>Counter</h3>
          <p className='u-icon' onClick={resetCounter}><X /></p>
      </div>
      <div className='middle'>
        <p className='m-text'>{count}</p>
      </div>
      <div className='lower'>
        <button className='dec-btn' onClick={decrementCount}>-</button>
        <button className='inc-btn' onClick={incrementCount}>+</button>
      </div>
    </div>
  )
}

export default App;
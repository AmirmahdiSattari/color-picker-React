import { useState } from 'react'
import './App.css'

import Red from './Red'
import Green from './Green'
import Blue from './Blue'
function App() {

  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const getStateFromRed = (stateFromChild) => {
    setRed(stateFromChild);
  }
  const getStateFromGreen = (stateFromChild) => {
    setGreen(stateFromChild);
  }
  const getStateFromBlue = (stateFromChild) => {
    setBlue(stateFromChild);
  }

  return (
    <div className='h-full w-full
    flex flex-row flex-wrap
     justify-center
    items-center'>

      <div className='h-screen flex
      m-8
      flex-col justify-center '>
        <Red getStateFromRed={getStateFromRed} />
        <Green getStateFromGreen={getStateFromGreen} />
        <Blue getStateFromBlue={getStateFromBlue} />
      </div>

      <div className='m-8 h-screen
       flex items-center justify-center'>
        <div className='
        flex items-center justify-center
        m-4 text-white font-bold
        p-4 border-2 border-black rounded-2xl'
        style={{backgroundColor:`rgba(${red},${green},${blue},1)`}}>
          <span>RGB(</span>
          <span>{red},</span>
          <span>{green},</span>
          <span>{blue})</span>
        </div>
      </div>

    </div>

  )
}

export default App

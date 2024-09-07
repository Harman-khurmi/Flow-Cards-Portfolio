import { React, useState, useEffect } from 'react'
import Leftsection from './components/Leftsection'
import Rightsection from './components/Rightsection'
import PacmanLoader
  from "react-spinners/PacmanLoader";
import './App.css'


function App() {
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <>
      <div className='bg-zinc-100/50 w-[100%] min-h-screen flex flex-row overflow-x-hidden relative'>
        {Loading ?
          <div className="loadingScreen">
            <PacmanLoader
              className="loaderAnimation"
              color={"#08c6f5"}
              loading={Loading}
              size={50}
            />
            <h3 className='Instructions1'>You can drag the Cards.</h3>
            <h3 className='Instructions2'>Double Click to Visit.</h3>
          </div>

          :
          <><Leftsection /><Rightsection /></>
        }
      </div>
    </>
  )
}

export default App

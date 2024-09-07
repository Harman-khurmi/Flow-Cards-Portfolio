import React from 'react'
import Leftsection from './components/Leftsection'
import Rightsection from './components/Rightsection'


function App() {
  return (
    <>
      <div className='bg-zinc-100/50 w-full min-h-screen tracking-tight flex flex-row overflow-x-hidden'>
        <Leftsection />
        <Rightsection />
      </div>
    </>
  )
}

export default App

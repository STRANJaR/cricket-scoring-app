'use client';


import React, { useEffect, useState } from 'react'
import ControlPanel from '../control-panel/page';
import ScoreCard from '../score-card/page';




const MainPanel = () => {



  return (
    <main className='p-1 text-sm'>

    <div className='grid grid-cols-3 gap-3'>
      <div className='col-span-2 w-full h-screen'>
      <ControlPanel/>

      </div>
      <div className='col-span-1 '>

      <ScoreCard/>
      </div>
    </div>
    </main>
  )
}

export default MainPanel
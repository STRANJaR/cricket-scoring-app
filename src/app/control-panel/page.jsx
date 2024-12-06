'use client';

import HeaderMenu from '@/components/HeaderMenu'
import React, { useEffect, useState } from 'react'
import {io} from 'socket.io-client'

const socket = io('http://localhost:3000');

const ControlPanel = () => {


  // const [socket, setSocket] = useState(null);
  const [score, setScore] = useState(0);
  const [commentary, setCommentary] = useState([]);
  
  useEffect(()=> {
    socket.on('connect', ()=> {
      console.log('connected')
    })

    socket.on('disconnected', ()=> {
      console.log('disconnected')
    })
    socket.on('scoreUpdate', (data)=> {
      setScore(data.newScore)
      setCommentary(prevCommentry => [...prevCommentry, data.commentary])
    });

    return () => {
      socket.disconnect();
    }

  }, [])


  const handleScoreUpdate = (newScore) => {
    socket.emit('scoreUpdate', {newScore, commentary:  `Scored ${newScore} runs!`})
  }



  return (
    <div className='h-full w-full border border-gray-400 p-4'>
        <HeaderMenu/>
    </div>
  )
}

export default ControlPanel
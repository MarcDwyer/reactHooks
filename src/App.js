import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {

  const [streamers, setStreamers] = useState(null);
  
  const getStreams = async () => {
    console.log('running...')
    const fetchStreams = await fetch('/streamers/all')
    const data = await fetchStreams.json()
    setStreamers(data)
  }
useEffect(() => {
    getStreams()
   setInterval(getStreams, 15000)
  }, [])
  console.log(streamers)

  return (
    <div className="container">
    {streamers && streamers.map(({name, imageId, channelId}) => (
      <span>{name} is the name <br /></span>
    ))}
    </div>
  )
}

export default App
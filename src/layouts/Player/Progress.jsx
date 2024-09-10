import React from 'react'
import { useSelector } from 'react-redux'

export default function Progress() {
  const progress = useSelector(state => state.progress)
  
  function formatValue(val){
    const currentMin = Math.trunc(val / 60)
    let currentSec = Math.trunc(val % 60)

    if(currentSec < 10){
      currentSec = `0${currentSec}`
    }

    return `${currentMin}:${currentSec}`
  }

  function handleProgressClick(e){
    const player = document.getElementById("audio-player")
    const rec = e.target.getBoundingClientRect()
    const width = rec.width
    const x = e.clientX - rec.left
    player.currentTime = (x/width)*progress.totalDuration
  }

  return (
    <div className='max-w-[800px] mx-auto'>
      <div 
      onClick={handleProgressClick}
      className='bg-slate-900 h-2 rounded cursor-pointer overflow-hidden'>
        <div style={{transform: `scaleX(${progress.current/progress.totalDuration})`}} className='bg-indigo-400  origin-left h-full pointer-events-none'>

        </div>
      </div>
      <div className='flex justify-between'>
        <span>{formatValue(progress.current)}</span>
        <span>{formatValue(progress.totalDuration)}</span>
      </div>
    </div>
  )
}

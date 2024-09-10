import React from 'react'
import prevIcon from '../../assets/prev-icon.svg'
import { useDispatch } from 'react-redux'
import { prevSong } from '../../features/playlist'

export default function PreviousButton() {
  const dispatch = useDispatch()

  return (
    <button 
    onClick={()=>dispatch(prevSong())}
    className='w-9 h-9 ml-4 bg-slate-400 rounded-full flex justify-center items-center'>
      <img src={prevIcon} className='w-5 h-5' alt="" />
    </button>
  )
}

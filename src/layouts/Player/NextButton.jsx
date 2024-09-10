import React from 'react'
import nextIcon from "../../assets/next-icon.svg"
import { useDispatch } from 'react-redux'
import { nextSong } from '../../features/playlist'

export default function NextButton() {
  const dispatch = useDispatch()
  return (
    <button 
    onClick={()=>dispatch(nextSong())}
    className='w-9 h-9 bg-slate-400 rounded-full flex justify-center items-center'>
      <img src={nextIcon} className='w-5 h-5' alt="" />
    </button>
  )
}

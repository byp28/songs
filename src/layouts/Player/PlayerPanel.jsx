import React from 'react'
import NextButton from './NextButton'
import { useSelector } from 'react-redux'
import PreviousButton from './PreviousButton'
import TogglePlayButton from './TogglePlayButton'
import Progress from './Progress'

export default function PlayerPanel() {
  const playlist = useSelector(state => state.playlist)
  const actuelSong = playlist.songs?.find(obj => obj.id === playlist.currentMusicID)
  return (
    <div 
    className='fixed w-full bottom-0 rounded  p-6 bg-[#050505]'>
      <div className='max-w-[800px] mx-auto mb-2'>
        <p className='text-xl text-white font-semibold'>{playlist.songs && actuelSong.title}</p>
        <div className='flex justify-between'>
          <p className='text-lg text-white'>{playlist.songs && actuelSong.artist}</p>
          <p className='text-lg text-white'>{playlist.songs?.findIndex(song => song.id === playlist.currentMusicID) + 1} / {playlist.songs?.length}</p>
        </div>
      </div>
      <div className='flex justify-center items-center mb-5 gap-5'>
        <PreviousButton/>
        <TogglePlayButton/>
        <NextButton/>
      </div>
      <Progress/>
    </div>
  )
}

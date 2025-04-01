import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getMusicsData,SelectSong } from '../features/playlist'


export default function Playlist() {
  const playlist = useSelector(state => state.playlist)
  const dispatch = useDispatch()

  if(!playlist.songs){
    dispatch(getMusicsData())
  }
  
  return (
    <ul className='flex flex-col'>
      {playlist?.songs?.length && playlist.songs.map(song =>(
        <li
          key={song.id}
          className='p-3 font-semibold bg-[#202020] hover:bg-[#282828] text-white mb-3 rounded cursor-pointer'
          onClick={()=>dispatch(SelectSong(song.id))}
        >
          <span>{song.title} - </span>
          <span>{song.artist}</span>
        </li>
      ))}
    </ul>
  )
}

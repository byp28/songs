import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs : undefined,
  play : false,
  currentMusicID : undefined
}

export const playlist = createSlice({
  name : "palylist",
  initialState,
  reducers:{
    addBaseSongs : (state, action) =>{
      state.songs = action.payload
      state.currentMusicID = action.payload[0].id
    },
    toggleLecture : (state, action) =>{
      state.play = !state.play
    },
    nextSong: (state, action) =>{
      if(state.songs.length === state.songs.findIndex(song => song.id === state.currentMusicID)+1){
        state.currentMusicID = state.songs[0].id
      }else{
        let currentIndex = state.songs.findIndex(song => song.id === state.currentMusicID)
        state.currentMusicID = state.songs[currentIndex+1].id
      }
    },
    prevSong : (state, action) =>{
      if(state.songs.findIndex(song => song.id === state.currentMusicID) === 0){
        state.currentMusicID = state.songs[state.songs.length-1].id
      }else{
        let currentIndex = state.songs.findIndex(song => song.id === state.currentMusicID)
        state.currentMusicID = state.songs[currentIndex-1].id
      }
    },
    SelectSong : (state, action) =>{
      state.currentMusicID = action.payload
    }
  }
})

export const {
  addBaseSongs,
  toggleLecture,
  nextSong,
  prevSong,
  SelectSong
} = playlist.actions

export function getMusicsData(action){
  return function(dispatch,getState){
    fetch("/data/playlist.json")
    .then(data => data.json())
    .then(data => dispatch(addBaseSongs(data.playlist)))
  }
}

export default playlist.reducer
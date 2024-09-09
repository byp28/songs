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
    }
  }
})

export const {addBaseSongs} = playlist.actions

export function getMusicsData(action){
  return function(dispatch,getState){
    fetch("/data/playlist.json")
    .then(data => data.json())
    .then(data => dispatch(addBaseSongs(data.playlist)))
  }
}

export default playlist.reducer
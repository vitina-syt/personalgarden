import { createSlice } from '@reduxjs/toolkit'
import material from '../data/material.js'
export const materialSlice = createSlice({
    name: 'material',
    initialState: {
      value: material,
    },
    reducers: {
      addmaterial: (state, action) => {
        state.value.push(action.payload)
      },
      findmaterial:(state, action) => {
        state.value=state.value.filter(item=>item.id===action.payload)
      },
      delmaterial: (state, action) => {
        state.value=state.value.filter(item=>item.id!==action.payload)
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addmaterial, findmaterial, delmaterial} = materialSlice.actions
  
  export default materialSlice.reducer
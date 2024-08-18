import { createSlice } from '@reduxjs/toolkit'

export const personSlice = createSlice({
    name: 'person',
    initialState: {
      value: [],
    },
    reducers: {
      addperson: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes.
        // Also, no return statement is required from these functions.
        state.value.push(action.payload)
      },
      delperson: (state, action) => {
        state.value=state.value.filter(item=>item.id!==action.payload)
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addperson, delperson} = personSlice.actions
  
  export default personSlice.reducer
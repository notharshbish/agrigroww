import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    id : 0 , 
    name : '', 
    email : '' 
}

const userSlice = createSlice({
    name : 'user' , 
    initialState , 
    reducer: {
        setUser : (state,action) => {
            state.id = action.payload.id
            state.name = action.payload.name
            state.email = action.payload.email
        }
    }
})

export default userSlice.reducer

export const {setUser} = userSlice.actions

export const selectUser = (state) => state.user
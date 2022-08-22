import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLogged: false,
        value: {}
    },
    reducers: {
     
        setUser: (state, action) => {

            const { payload } = action 

            state.isLogged = true
            state.value = payload

        

        }
    
    }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
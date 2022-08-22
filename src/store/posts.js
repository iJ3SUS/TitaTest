import { createSlice } from '@reduxjs/toolkit'

import http from '../utils/api'

export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        value: []
    },
    reducers: {
     
        setPosts: (state, action) => {

            const { payload } = action 

            state.value = payload.data
        

        }
    
    }
})

export const { setPosts } = postSlice.actions

//ASYNC CALLS
export const getPosts = (query) => async (dispatch) => {

    const response = await http.get('post', {
        params: {
            limit: 50
        }
    })

    dispatch(
        setPosts(response.data)
    )

}

export default postSlice.reducer
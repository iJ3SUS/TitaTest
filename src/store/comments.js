import { createSlice } from '@reduxjs/toolkit'

import http from '../utils/api'

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        show: false,
        value: []
    },
    reducers: {
        openModal: (state, action) => {

            const { payload } = action 

            state.show = payload

            if(!payload){
                state.value = []
            }
        
        },
        addComments: (state, action) => {

            const { payload } = action 

            state.value = payload.data
        
        },
    
    }
})

export const { openModal, addComments } = commentsSlice.actions

//ASYNC CALLS
export const getCommets = (postId) => async (dispatch) => {

    const response = await http.get('post/'+ postId + '/comment', {
        params: {
            limit: 20
        }
    })

    dispatch( 
        openModal(true)
    )

    dispatch(
        addComments(response.data)
    )

}

export default commentsSlice.reducer
import { configureStore } from '@reduxjs/toolkit'

import postsReducer from './store/posts'
import commentsReducer from './store/comments'
import userReducer from './store/user'

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        comments: commentsReducer,
        user: userReducer
    }
})
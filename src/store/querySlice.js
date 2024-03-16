import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuery = createAsyncThunk(
    "query/fetchQuery",
    async () => {
        const response = await axios.get("https://dummyjson.com/posts")
        return response.data
    }
)

export const createPost = createAsyncThunk(
    'posts/createPost', 
    async (postData) => {
        const response = await axios.post('https://dummyjson.com/posts/add', postData);
        return response.data;
    }
);
  
  export const deletePost = createAsyncThunk(
    'posts/deletePost', 
    async (postId) => {
        await axios.delete(`https://dummyjson.com/todos/${postId}`);
        return postId;
  });

const querySlice = createSlice({
    name: 'query',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchQuery.pending, (state, action) => {
            state.loading = true
            state.error = null
        })
        .addCase(fetchQuery.fulfilled, (state, action) => {
            state.loading = false
            state.items = action.payload.posts
        })
        .addCase(fetchQuery.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        .addCase(createPost.fulfilled, (state, action) => {
            console.log(action.payload)
            state.loading = false
            state.items.push(action.payload)
        })
        .addCase(deletePost.fulfilled, (state, action) => {
            state.loading = false
            state.items = state.items.filter(post => post.id !== action.payload);
        })
    }
})

export const queryReducer = querySlice.reducer
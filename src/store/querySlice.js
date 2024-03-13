import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuery = createAsyncThunk(
    "query/fetchQuery",
    async () => {
        const response = await axios.get("https://dummyjson.com/posts")
        return response.data
    }
)

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
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchQuery.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload.posts;
        })
        .addCase(fetchQuery.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export const queryReducer = querySlice.reducer
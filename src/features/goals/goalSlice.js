import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    goals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const createGoal = createAsyncThunk('goal/create', async(goalData,thunlAPI) => {
    try{

    }catch (e) {
        const message = (e.response && e.response.data && e.response.data.message) ||
            e.message || e.toString()
        thunlAPI.rejectWithValue(message);
    }
})


export const goalSlice = createSlice({
    name: 'goal',
    initialState,
    reducers: {
        reset : (state) => {
            state = initialState;
        }
    }
})


export const {reset} = goalSlice.actions
export default goalSlice.reducer
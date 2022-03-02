import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import goalService from "./goalService";

const initialState = {
    goals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const createGoal = createAsyncThunk('goal/create', async (goalData, thunlAPI) => {
    try {
        const token = thunlAPI.getState().auth.user.token;
        return await goalService.createGoal(goalData, token)
    } catch (e) {
        const message = (e.response && e.response.data && e.response.data.message) ||
            e.message || e.toString()
        thunlAPI.rejectWithValue(message);
    }
})


export const goalSlice = createSlice({
    name: 'goal',
    initialState,
    reducers: {
        reset: (state) => {
            state = initialState;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createGoal.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createGoal.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.goals.push(action.payload);
            })
            .addCase(createGoal.rejected, (state, action)=>{
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.message = action.payload;
            })
    }
})


export const {reset} = goalSlice.actions
export default goalSlice.reducer
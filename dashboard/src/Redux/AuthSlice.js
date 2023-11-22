import { createSlice } from "@reduxjs/toolkit";




const initialState = []
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        addAuth:(state,action)=>{
            state.push(action.payload)
        }
    }
})


export const {addAuth} = authSlice.actions
export default authSlice.reducer
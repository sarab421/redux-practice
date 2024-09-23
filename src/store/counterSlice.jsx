import { createSlice } from "@reduxjs/toolkit";

export const counterSlice =createSlice({
    initialState: 0,
    name: 'counter',
    reducers:{
        increament:(state)=>state+1,
        decrement:(state)=>{
            if(state>0){
                 return state-1;
            }
            return 0
        }
    }
});
export const {increament,decrement} =counterSlice.actions;
export default counterSlice.reducer
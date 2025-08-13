import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState:{
        count: 0,
        allStudent: [],
        allProduct: []
    },
    reducers: {
        increment: (state)=>{
            state.count += 1
        },
        decrement: (state)=>{
            state.count -= 1
        },
        increaseByParam: (state, action)=>{
            state.count += action.payload
        },
        saveStudent: (state,action)=>{
            state.allStudent.push(action.payload)

            localStorage.setItem(JSON.stringify("student", state.allStudent))
        }
    }
})

export const {increment, decrement, increaseByParam, saveStudent} = counterSlice.actions
export default counterSlice.reducer
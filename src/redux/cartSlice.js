import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:[],
    reducers:{
        // when adding, if the item already exists increment its qty
        AddItem:(state,action) =>{
            const existing = state.find(item => item.id === action.payload.id);
            if (existing) {
                existing.qty += action.payload.qty;
            } else {
                state.push(action.payload);
            }
        },
        // remove by id
        RemoveItem:(state,action) =>{
            return state.filter((item) => item.id !== action.payload)
        },
        // update quantity explicitly
        UpdateQty:(state, action) => {
            const { id, qty } = action.payload;
            const item = state.find(i => i.id === id);
            if (item) {
                item.qty = qty;
            }
        }
    }
})  

export const {AddItem, RemoveItem, UpdateQty} = cartSlice.actions
export default cartSlice.reducer
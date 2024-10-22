import { createSlice } from "@reduxjs/toolkit";

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: {
    value: 0,
    data: [],
    displayData : [],
  },
  reducers: {
    increaseCartNumber: (state, action) => {
      state.value = state.value + 1;
      

      let repeatOrder = state.data.find((singleArray) => {
        return singleArray.id === action.payload.id;
      });

      if (repeatOrder) {
        repeatOrder.quantity += 1;
        repeatOrder.price += action.payload.price;
      } else {
        state.data.push(action.payload);
      }
    },

    deleteItem : (state , action)=>{
      
       let updatedArray =   state.data.filter((item , index)=>{
          return item.id != action.payload.id
        })


          state.value = state.value - action.payload.quantity
          state.data = [...updatedArray]

        
    },
    setDisplayData : (state, action)=>{
        state.displayData = action.payload
    }
  },
});

export const { increaseCartNumber , deleteItem, setDisplayData} = addToCartSlice.actions;
export default addToCartSlice.reducer;

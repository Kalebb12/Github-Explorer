import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = {
  userName: "",
  user: [],
  // status:"",
  repo:[],
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser(state, action) {
        state.user = action.payload.user;
        state.repo = action.payload.repo;
        state.isLoading = false;
    },
    startFetch(state, action) {
      state.isLoading = true;
      state.user = [];
      state.repo = [];
      },
  },
});



const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;

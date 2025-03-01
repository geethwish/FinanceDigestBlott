import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface UserState {
  name: string | null;
  loading: boolean;
}

const initialState: UserState = {
  name: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
      AsyncStorage.setItem("userName", action.payload);
    },
    fetchUser: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { registerUser, fetchUser } = userSlice.actions;
export default userSlice.reducer;

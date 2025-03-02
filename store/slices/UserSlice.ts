import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface UserState {
  firstName: string | null;
  lastName: string | null;
  loading: boolean;
}

const initialState: UserState = {
  firstName: null,
  lastName: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<string>) => {
      const payload = JSON.parse(JSON.stringify(action.payload));
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;

      // save on async storage
      AsyncStorage.setItem("firstName", payload.firstName);
      AsyncStorage.setItem("lastName", payload.lastName);
    },
    fetchUser: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
      state.lastName = action.payload;
    },
  },
});

export const { registerUser, fetchUser } = userSlice.actions;
export default userSlice.reducer;

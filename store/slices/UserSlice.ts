import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface UserState {
  firstName: string | null;
  lastName: string | null;
  loading: boolean;
}

const initialState: UserState = {
  firstName: null,
  lastName: null,
  loading: false,
};

const fetchUserDetails = async () => {
  // Saved User details form db
  const firstName = await AsyncStorage.getItem("firstName");
  const lastName = await AsyncStorage.getItem("lastName");
  return { firstName, lastName };
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
      // Fetch user details from db
      fetchUserDetails()
        .then((userDetails) => {
          state.firstName = userDetails.firstName;
          state.lastName = userDetails.lastName;
        })
        .catch((error) => {
          state.firstName = "";
          state.lastName = "";
        });
    },
  },
});

export const { registerUser, fetchUser } = userSlice.actions;
export default userSlice.reducer;

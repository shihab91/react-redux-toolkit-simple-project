import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: "0", name: "shihab" },
  { id: "1", name: "shumon" },
  { id: "2", name: "Dave Gray" },
];
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});
export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;

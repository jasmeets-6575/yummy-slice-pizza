import { createSlice } from "@reduxjs/toolkit";

interface stateProps {
    isSidebarOpen: boolean
}

const initialState:stateProps = {
  isSidebarOpen: false,
};

const toggleSidebarSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export default toggleSidebarSlice.reducer ;
export const {toggleSidebar} = toggleSidebarSlice.actions

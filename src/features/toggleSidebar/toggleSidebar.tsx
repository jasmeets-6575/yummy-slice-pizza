import { createSlice } from "@reduxjs/toolkit";

interface stateProps {
  isSidebarOpen: boolean;
  isRightSidebarOpen: boolean;
}

const initialState: stateProps = {
  isSidebarOpen: false,
  isRightSidebarOpen: false,
};

const toggleSidebarSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleRightSidebar: (state) => {
      state.isRightSidebarOpen = !state.isRightSidebarOpen;
    },
  },
});

export default toggleSidebarSlice.reducer;
export const { toggleSidebar, toggleRightSidebar } = toggleSidebarSlice.actions;

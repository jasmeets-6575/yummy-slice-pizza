import { createSlice } from "@reduxjs/toolkit";

interface stateProps {
  isSidebarOpen: boolean;
  isRightSidebarOpen: boolean;
  isLoginSidebarOpen: boolean;
}

const initialState: stateProps = {
  isSidebarOpen: false,
  isRightSidebarOpen: false,
  isLoginSidebarOpen: false,
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
    toggleLoginSidebar: (state) => {
      state.isLoginSidebarOpen = !state.isLoginSidebarOpen;
    },
  },
});

export default toggleSidebarSlice.reducer;
export const {toggleLoginSidebar, toggleSidebar, toggleRightSidebar } = toggleSidebarSlice.actions;

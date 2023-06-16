import { createSlice } from "@reduxjs/toolkit";

interface stateProps {
  isSidebarOpen: boolean;
  isRightSidebarOpen: boolean;
  isLoginSidebarOpen: boolean;
  isDarkMode: boolean;
}

const initialState: stateProps = {
  isSidebarOpen: false,
  isRightSidebarOpen: false,
  isLoginSidebarOpen: false,
  isDarkMode: false,
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
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
    closeRightSidebar: (state) => {
      state.isRightSidebarOpen = false;
    },
    closeLoginSidebar: (state) => {
      state.isLoginSidebarOpen = false;
    },
  },
});

export default toggleSidebarSlice.reducer;
export const {
  toggleSidebar,
  toggleRightSidebar,
  toggleLoginSidebar,
  toggleDarkMode,
  closeSidebar,
  closeRightSidebar,
  closeLoginSidebar,
} = toggleSidebarSlice.actions;

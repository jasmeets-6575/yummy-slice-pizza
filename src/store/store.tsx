import { Store, configureStore } from "@reduxjs/toolkit";
import toggleSidebarSlice from "../features/toggleSidebar/toggleSidebar"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store:Store = configureStore({
  reducer: {
    toggle :toggleSidebarSlice,
  },
});

export const useAppDispatch:()=>typeof store.dispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
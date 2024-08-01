import { combineReducers, configureStore } from "@reduxjs/toolkit";
import multipollReducer from "./reducers/multipollSlice";

const rootReducer = combineReducers({
  multipoll: multipollReducer,
});

export const store = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];

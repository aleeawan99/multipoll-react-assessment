import { configureStore } from '@reduxjs/toolkit'
import multipollReducer from './reducers/multipollSlice'

export const store = configureStore({
  reducer: {
    multipoll: multipollReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

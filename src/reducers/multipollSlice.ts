import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SelectedOption {
  [key: number]: number;
}

interface InitialState {
  selectedOptions: SelectedOption;
  status: "idle" | "pending" | "fulfilled" | "failed";
  error: string | null;
}

interface data {
  question: string;
  answer: string;
}

const initialState: InitialState = {
  selectedOptions: {},
  status: "idle",
  error: null,
};

export const submitMultipollData = createAsyncThunk(
  "multipoll/submitMultipollData",
  async (data: data[], { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data }),
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit the summary");
      }
      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue(error);
    }
  },
  {
    condition: (_, { getState }) => {
      const { multipoll } = getState() as RootState;
      const fetchStatus = multipoll.status;
      if (fetchStatus === "fulfilled" || fetchStatus === "pending") {
        // Already posted or in progress, don't need to re-post
        return false;
      }
    },
  }
);

const multipollSlice = createSlice({
  name: "multipoll",
  initialState,
  reducers: {
    setSelectedOption(
      state,
      action: PayloadAction<{ stepIndex: number; optionIndex: number }>
    ) {
      state.selectedOptions[action.payload.stepIndex] = action.payload.optionIndex;
    },
    reset(state) {
      state.selectedOptions = initialState.selectedOptions;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(submitMultipollData.pending, (state) => {
        state.status = "pending";
      })
      .addCase(submitMultipollData.fulfilled, (state) => {
        state.status = "fulfilled";
      })
      .addCase(submitMultipollData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { setSelectedOption, reset } = multipollSlice.actions;
export const getSelectedOptions = (state: RootState) => {
  return state.multipoll.selectedOptions;
};
export default multipollSlice.reducer;

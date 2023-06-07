import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { INotification, MESSAGE_CATEGORIES, Tstatus } from "../../const";
import apiAdapter from "../../app/adapters/api";
import { toast } from "react-toastify";

export interface AppState {
  logs: Array<any>;
  status: Tstatus;
}

const initialState: AppState = {
  logs: [],
  status: "idle",
};

export const logsSlice = createSlice({
  name: "app",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setLogs: (state, action: PayloadAction<Array<any>>) => {
      state.logs = action.payload;
    },
    setStatus: (state, action: PayloadAction<Tstatus>) => {
      state.status = action.payload;
    },
  },
});

export const { setLogs, setStatus } = logsSlice.actions;

export const fetchLogs = (): AppThunk => async (dispatch, getState) => {
  try {
    dispatch(setStatus("loading"));
    const response = await apiAdapter.getLogs();
    console.log("response", response);
    dispatch(setLogs(response));
    dispatch(setStatus("idle"));
  } catch (error) {
    console.log("error", error);
    dispatch(setStatus("idle"));
  }
};

export const sendMessage =
  (category: any, message: string): AppThunk =>
  async (dispatch, getState) => {
    try {
      dispatch(setStatus("loading"));
      const response = await apiAdapter.sendMessage({
        category,
        message,
        userId: "1",
      });
      toast("Sent!");
      dispatch(setStatus("idle"));
    } catch (error) {
      console.log("error", error);
      toast.error("Something happened, try again later!",);
      dispatch(setStatus("idle"));
    }
  };

export const selectLogs = (state: RootState): Array<any> => state.logs.logs;
export const selectStatus = (state: RootState) => state.logs.status;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default logsSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RouteState {
  polyline: string | null;
}

const initialState: RouteState = {
  polyline: null,
};

const polylineSlice = createSlice({
  name: 'polyline',
  initialState,
  reducers: {
    setRoutePolyline(state, action: PayloadAction<string>) {
      state.polyline = action.payload;
    },
    clearRoutePolyline(state) {
      state.polyline = null;
    },
  },
});

export const { setRoutePolyline, clearRoutePolyline } = polylineSlice.actions;
export default polylineSlice.reducer;

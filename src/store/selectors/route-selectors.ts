import { RootState } from "../store";

export const selectRoutePolyline = (state: RootState) => state.polyline.polyline;
export const selectRoutes = (state: RootState) => state.routes.routes;

import { RoutePoint } from "../../services";

export const fetchRoute = (payload: RoutePoint[]) => ({
  type: 'ROUTE_FETCH_REQUESTED',
  payload,
});

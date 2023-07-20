import { setRoutePolyline, clearRoutePolyline } from '../reducers/polyline-reducer';
import { call, put, SagaReturnType, select, takeEvery } from 'redux-saga/effects';
import { getRoutePolyline } from "../../services";
import { RootState } from "../store";

function* fetchRoutePolyline(action: any): Generator<any, void, SagaReturnType<typeof getRoutePolyline>> {
  try {
    const points = action.payload;
    const polyline: string = yield call(getRoutePolyline, points);
    const routePolyline: string | null = yield select((state: RootState) => state.polyline.polyline);
    if (routePolyline === null) {
      yield put(setRoutePolyline(polyline));
    }
  } catch (error) {
    yield put(clearRoutePolyline());
  }
}

export function* watchFetchRoutePolyline() {
  yield takeEvery('ROUTE_FETCH_REQUESTED', fetchRoutePolyline);
}

import { all } from 'redux-saga/effects';
import { watchFetchRoutePolyline } from './route-saga';

export function* rootSaga() {
  yield all([
    watchFetchRoutePolyline(),
  ]);
}

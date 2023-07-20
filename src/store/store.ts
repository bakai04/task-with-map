import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import polyplineReducer from "./reducers/polyline-reducer";
import routeReducer from "./reducers/route-reducer";
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "./sagas/root-saga";

export const rootReducer = combineReducers(
  {
    polyline: polyplineReducer,
    routes: routeReducer
  }
)

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store;
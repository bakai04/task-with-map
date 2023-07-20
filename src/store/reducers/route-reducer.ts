import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Node {
  title: string;
  lat: number;
  lng: number;
}

export interface Route {
  title: string;
  nodes: Node[];
}

interface RouteState {
  routes : Route[]
}
const ROUTES = [
  {
    title: "Маршрут 1",
    nodes: [
      {
        title: "Точка 1",
        lat: 59.84660399,
        lng: 59.82934196,
      },
      {
        title: "Точка 2",
        lat: 59.83567701,
        lng: 30.29496392,
      },
      {
        title: "Точка 3",
        lat: 30.42423701,
        lng: 30.38064206,
      }
    ]
  },
  {
    title: "Маршрут 2",
    nodes: [
      {
        title: "Точка 1",
        lat: 60.84660399, // Измененные координаты для границы
        lng: 59.8276129, // Измененные координаты для границы
      },
      {
        title: "Точка 2",
        lat: 59.84660399,
        lng: 30.42423701,
      },
      {
        title: "Точка 3",
        lat: 30.41705607,
        lng: 30.29496392,
      }
    ]
  },
  {
    title: "Маршрут 3",
    nodes: [
      {
        title: "Точка 1",
        lat: 59.83567701,
        lng: 59.84660399,
      },
      {
        title: "Точка 2",
        lat: 30.38064206,
        lng: 30.29496392,
      },
      {
        title: "Точка 3",
        lat: 59.82761295,
        lng: 30.41705607,
      }
    ]
  },
];


const initialState: RouteState = {
  routes: ROUTES,
};

const routeSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {
 
  },
});

export default routeSlice.reducer;

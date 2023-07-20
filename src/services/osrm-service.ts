import axios from 'axios';

export type RoutePoint = number[]

export const getRoutePolyline = async (points: RoutePoint[]) => {
  const url = `https://router.project-osrm.org/route/v1/driving/${points.join(';')}`;
  try {
    const response = await axios.get(url);
    return response.data.routes[0].geometry;
  } catch (error) {
    throw new Error('Failed to fetch route data');
  }
};

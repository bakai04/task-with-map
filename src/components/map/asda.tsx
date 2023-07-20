import React, { useMemo, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Polyline, useMap, Marker, Popup } from 'react-leaflet';
import L, { LatLngBoundsExpression, LatLngExpression } from 'leaflet';
import { useParams } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import style from './map.module.scss';
import { useAppDispatch, useAppSelector } from "../../store/store";
import { fetchRoute } from "../../store/actions/polylines-action";
import { selectRoutes } from "../../store/selectors/route-selectors";

interface IMapBoundProps {
  bounds: LatLngBoundsExpression
}

export const Map = () => {
  const position = { lat: 51.505, lng: -0.09 };
  const routes = useAppSelector(selectRoutes);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    const selectedRoute = routes.find((elem) => elem.title === id);
    if (selectedRoute) {
      const points = selectedRoute.nodes.map((elem) => [elem.lat, elem.lng]);
      dispatch(fetchRoute(points));
    }
  }, [id, routes, dispatch]);

  const polyline = useMemo(() => {
    const selectedRoute = routes.find((elem) => elem.title === id);
    if (selectedRoute) {
      return selectedRoute.nodes.map((elem) => [elem.lat, elem.lng]);
    }
  }, [routes, id]);

  const bounds = useMemo(() => {
    if (polyline && polyline.length > 0) {
      return L.latLngBounds(polyline as LatLngExpression[]);
    }
  }, [polyline]);

  const SetMapBounds = ({ bounds }: IMapBoundProps) => {
    const map = useMap();
    map.fitBounds(bounds);
    return null;
  }

  return (
    <MapContainer center={position} bounds={bounds} zoom={10} scrollWheelZoom={true} className={style.map}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {routes.find((elem) => elem.title === id)?.nodes.map((elem, key) => (
        <Marker position={{lat: elem.lat, lng: elem.lng}} key={key}>
          <Popup>
            {elem.title}
          </Popup>
        </Marker>
      ))}
      {polyline && <Polyline positions={polyline as LatLngExpression[]} />}
      {bounds && <SetMapBounds bounds={bounds} />}
    </MapContainer >
  );
};

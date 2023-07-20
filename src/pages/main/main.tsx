import React from 'react'
import { RouteList, Map } from "../../components";
import style from "./main.module.scss";

const Main = () => {
  return (
    <div className={style.main}>
      <RouteList />
      <div className={style.main_map}>
        <Map />
      </div>
    </div>
  )
}

export default Main
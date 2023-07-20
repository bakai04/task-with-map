import { Divider, List, Menu, MenuProps, Typography } from "antd"
import React, { useMemo } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { selectRoutes } from "../../store/selectors/route-selectors"
import { useAppSelector } from "../../store/store"
import styles from "./route-list.module.scss"

export const RouteList = () => {
  const navigate = useNavigate();
  const routes = useAppSelector(selectRoutes);
  const { id } = useParams();

  const menuItems = useMemo(() => {
    return routes.map((elem, key) => ({
      label: elem.title,
      key: elem.title
    }))
  }, [routes])

  const onSelectRoute: MenuProps['onClick'] = (e) => {
    navigate("/" + e.key)
  }

  return (
    <div className={styles.route_list}>
      <Divider orientation="left">Маршруты</Divider>
      <Menu
        onClick={onSelectRoute}
        style={{ width: 256 }}
        defaultSelectedKeys={id ? [id] : []}
        mode="inline"
        items={menuItems}
      />
    </div>
  )
}

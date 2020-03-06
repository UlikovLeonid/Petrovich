import React from "react";
import { Menu } from "semantic-ui-react";
import s from "./Menu.module.sass";

const TopMenu = () => (
  <Menu>
    <Menu.Item name="browse">Магазин</Menu.Item>

    <Menu.Menu position="right">
      <Menu.Item name="signup">
        Итого: &nbsp; <b> 0</b> руб.
      </Menu.Item>

      <Menu.Item name="help">
        Корзина &nbsp; (<b>0</b>)
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);
export default TopMenu;

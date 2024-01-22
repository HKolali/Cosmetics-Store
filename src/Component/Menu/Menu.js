import React, { useEffect, useState } from 'react'
import './Menu.css'
import MenuItem from './MenuItem/MenuItem'
import { CiUser, CiShoppingCart } from "react-icons/ci";

export default function Menu() {

  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch('menu.json')
      .then((response) => {
        return response.json();
      }).then((data) => {
        setMenu(data)
      })
  }, [])

  return (
    <div className='menu'>
      <div className="menu__parent-item left-menu">
        {menu.map(menuItem => (
          menuItem.direction == "left" && (<MenuItem key={menuItem.id} {...menuItem} />)
        ))}
        <CiShoppingCart className='menu__icon'/>
        <CiUser className='menu__icon'/>
      </div>
      <div className="menu__parent-item">
        <img className='menu__logo' src="image/logo/logo.jpg" alt="" width={70} />
      </div>
      <div className="menu__parent-item right-menu">
        {menu.map(menuItem => (
          menuItem.direction == "right" && (<MenuItem key={menuItem.id} {...menuItem} />)
        ))}
      </div>
    </div>
  )
}

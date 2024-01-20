import React, { useEffect, useState } from 'react'
import './Menu.css'
import MenuItem from './MenuItem/MenuItem'
import { json } from 'react-router-dom'

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
      {menu.map(menuItem => (
        <MenuItem key={menuItem.id} {...menuItem}/>
      ))}
    </div>
  )
}

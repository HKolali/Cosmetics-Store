import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './MenuItem.css'
import { SlArrowDown } from "react-icons/sl";

export default function MenuItem(props) {

  useEffect(() => {
    
  })
  return (
    <>
      {props.submenu.length > 0 ?
        (<>
          <Link className='menu-item submenu' to={props.link}>{props.title}
          <ul className='sub-menu-list'>
            {props.submenu.map(item => (<li key={item.id}><Link className='sub-menu-list-item' to={item.link}>{item.title}</Link></li>))}
          </ul>
          </Link>
          <SlArrowDown className='menu-item-dropdown'/>
          
        </>
        )
        : (<>
        <Link className='menu-item' to={props.link}>{props.title}</Link>
        </>
        )
      }
    </>
  )
}

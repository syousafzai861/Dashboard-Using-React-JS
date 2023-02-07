import React from 'react'
import "./Sidebar.css";
import LOGO from "../../imgs/logo.png";
import { SidebarData } from './Data/Data';
import {UilSignOutAlt} from "@iconscout/react-unicons";
import { useState } from 'react';
const Sidebar = () => {
  const[selected, setSelected]= useState(0);
  return (
  <div className="Sidebar">
    {/* LOGO */}
    <div className="logo">
        <img src={LOGO} alt="" />
        <span>
            sh<span>o</span>ps
        </span>
    </div>

    {/* menu */}
    <div className="menu">
     {
      SidebarData.map((item,index)=>{
        return(
          <div className={selected === index? "menuItem active":"menuItem"}
          key={index}
          onClick={()=>setSelected(index)}>
            <item.icon/>
            <span>{item.heading}</span>
          </div>
        )
      })
     }
     <div className="menuItem ">
      <UilSignOutAlt/>
     </div>
    </div>
  </div>
  )
}

export default Sidebar

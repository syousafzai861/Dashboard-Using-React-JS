import React from 'react'
import "./Sidebar.css";
import LOGO from "../../imgs/logo.png";
import { SidebarData } from './Data/Data';
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { motion } from 'framer-motion';
import { useState } from 'react';
const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const sideBarVariants ={
    true:{
      left:'60'
    },
    false:{
      left:'-60%'
    }
  }
  return (
    <>
      {/* <div className='bars' style={expanded ? { left: "60%" } : { left: "5%" }}
      onClick={()=>setExpanded(!expanded)}>
        <UilBars />
      </div> */}
      <motion.div className="Sidebar"
      variants={sideBarVariants} 
      animate={window.innerWidth<='1200'?`${expanded}`:''}
      >
     
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
            SidebarData.map((item, index) => {
              return (
                <div className={selected === index ? "menuItem active" : "menuItem"}
                  key={index}
                  onClick={() => setSelected(index)}>
                  <item.icon />
                  <span>{item.heading}</span>
                </div>
              )
            })
          }
          <div className="menuItem ">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Sidebar

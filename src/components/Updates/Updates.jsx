import React from 'react'
import { UpdateData } from '../Sidebar/Data/Data'
import "./Updates.css"
const Updates = () => {
    return (
        <div className="updates">
            {
                UpdateData.map((update) => {
                    return (
                        <div className="update">
                            <img src={update.img} alt="" />
                            <div className="notifi">
                                <div style={{marginBottom:"0.5rem"}}>
                                    <span>{update.name}</span>
                                    <span>{update.noti}</span>
                                </div>
                                <span>{update.time}</span>
                            </div>
                       
                              
                        
                        </div>
                        
                    )
                })
            }

        </div>
    )
}

export default Updates

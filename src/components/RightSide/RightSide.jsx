import React from 'react'
import CutomerReview from '../CustomerReiview/CutomerReview'
import Updates from '../Updates/Updates'
// import CutomerReview from "../CustomerReiview/CutomerReview";
import "./RightSide.css"
const RightSide = () => {
  return (
    <div className="RightSide">
        <div>
            <h3>Updates</h3>
            <Updates/>
        </div>
        <div>
            <h3>Customer Review</h3>
            <CutomerReview/>
        </div>

    </div>
  )
}

export default RightSide

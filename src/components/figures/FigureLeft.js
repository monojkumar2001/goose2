import React from 'react'

const FigureLeft = () => {
  return (
    <>
   <div className="figure-left-con">
    <div className="figure-left-item">
      <h4>Investor</h4>
      <div className="figure-img" >
        <img src="/images/investor-img-2.svg" alt="" />
      </div>
    </div>
    <div className="figure-left-item figure-left-item2">
    <div className="figure-img figure-img2">
        <img src="/images/profit.svg" alt="" />
      </div>
      <h4>Profit Generatd with forex trading</h4>
    </div>
    <div className="figure-left-item figure-left-items">
      <div className="figure-item-team">
      <div className="figure-img">
        <img src="/images/team.svg" alt="" />
      </div>
      <h4>20% Team</h4>
      </div>
      <div className="figure-item-team">
      <div className="figure-img">
        <img src="/images/investor-img-3.svg" alt="" />
      </div>
      <h4>80% Investors</h4>
      </div>
    </div>
   </div>
    </>
  )
}

export default FigureLeft
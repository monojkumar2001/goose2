import React from 'react';

import { useTronContext } from "../../Context/useContext";


const WithdrawContentCard = ({img, title, dis1, dis2, dis3}) => {

  const {requestWithdrawOfInitialInvestment,cancelRequestForWithdrawOfInitialInvestment,investedAmountByInvestor} = useTronContext();



  return (
    <div className='hero-card-item'>
     <div className="card-img">
        <img src={img} alt="" />
      </div>
      <h4 className="card-title">{title}</h4>
      <table>
        <tbody>
          <tr>
            <td>{dis1}</td>
            <td>
              <span id="total-invested">{investedAmountByInvestor || "?"}</span>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
            <div className="withdraw-btn d-flex gap-4">
            <button onClick={requestWithdrawOfInitialInvestment} className="card-btn-item">{dis2}</button>
            <button onClick={cancelRequestForWithdrawOfInitialInvestment} className="card-btn-item">{dis3}</button>
            </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default WithdrawContentCard
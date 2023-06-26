import React from "react";

import { useTronContext } from "../../Context/useContext";

const InvestCard = ({ img, title1, title2, dis1, dis2, dis3, dis4, dis5 }) => {
  const {
    investmentAmount,
    setInvestmentAmount,
    handleSubmit,
    withdrawProfit,
    compoundProfit
  } = useTronContext();

  return (
    <div className="invest-wrapper">
      <div className="hero-card-item">
        <div className="card-img">
          <img src={img} alt="" />
        </div>
        <h4 className="card-title">{title1}</h4>
        <table>
          <tbody>
            {/* <tr>
              <td>
                <input
                  className="form-control"
                  type="number"
                  value={approveAmount}
                  onChange={(e) => setApproveAmount(e.target.value)}
                  placeholder="1000"
                />
              </td>
              <td>
                <button onClick={Approve} className="card-btn-item ">
                  {dis1}
                </button>
              </td>
            </tr> */}
            <tr>
              <td>
                <input
                  className="form-control"
                  type="number"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(e.target.value)}
                  placeholder="1000"
                />
              </td>
              <td>
                <button className="card-btn-item" onClick={handleSubmit}>
                  {dis2}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="invest-card hero-card-item">
        <h4 className="card-title">{title2}</h4>
        <table>
          <tbody>
            <tr>
              <td>{dis3}</td>
              <td>
                <div className="withraw-wrapper">
                  <button onClick={withdrawProfit} className="card-btn-item">
                    {dis4}
                  </button>
                  <button onClick={compoundProfit} className="card-btn-item">
                    {dis5}
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvestCard;

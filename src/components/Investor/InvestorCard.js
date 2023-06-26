import React from "react";
import { useTronContext } from "../../Context/useContext";

const InvestorCard = ({ img, title, dis1, dis2, dis3, dis4 }) => {
  const {
    walletBalance,
    investedAmountByInvestor,
    profitEarnedHistoryByInvestor,
    userAvailableProfit,
  } = useTronContext();

  return (
    <div className="hero-card-item">
      <div className="card-img">
        <img src={img} alt="" />
      </div>
      <h4 className="card-title">{title}</h4>
      <table>
        <tbody>
          <tr>
            <td>{dis1}</td>
            <td>
              <span id="total-invested">{walletBalance || "?"}</span>
            </td>
          </tr>
          <tr>
            <td>{dis2}</td>
            <td>
              <span id="total-investors">
                {investedAmountByInvestor || "?"}
              </span>
            </td>
          </tr>
          <tr>
            <td>{dis3}</td>
            <td>
              <span id="total-profit">{profitEarnedHistoryByInvestor || "?"}</span>
            </td>
          </tr>
          <tr>
            <td>{dis4}</td>
            <td>
              <span id="total-profit">{userAvailableProfit || "?"}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InvestorCard;

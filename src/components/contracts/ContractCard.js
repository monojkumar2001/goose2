import React from "react";

import { useTronContext } from "../../Context/useContext";

const ContractCard = ({ img, title, dis1, dis2, dis3 }) => {


  const {totalInvestors,totalInvested,totalProfit} = useTronContext();




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
              <span id="total-invested">{ totalInvested  || "?"}</span>
            </td>
          </tr>
          <tr>
            <td>{dis2}</td>
            <td>
              <span id="total-investors">{totalProfit || "?"}</span>
            </td>
          </tr>
          <tr>
            <td>{dis3}</td>
            <td>
              <span id="total-profit">{totalInvestors || "?"}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContractCard;

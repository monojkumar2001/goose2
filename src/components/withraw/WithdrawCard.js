import React, { useState, useEffect } from "react";

import { useTronContext } from "../../Context/useContext";

const WithdrawCard = () => {

  const { lastweekprofit } = useTronContext();
  const [lastMonthProfit, setLastMonthProfit] = useState(0);

  const calculateLastMonthProfit = () => {
    const weeksPerMonth = 4; // Assuming 4 weeks per month
    const lastMonthIndex = Math.floor(
      (lastweekprofit.length - 1) / weeksPerMonth
    );
    let lastMonthProfit = 0;

    for (
      let i = lastMonthIndex * weeksPerMonth;
      i < lastweekprofit.length;
      i++
    ) {
      lastMonthProfit += lastweekprofit[i];
    }

    setLastMonthProfit(lastMonthProfit);
  };

  useEffect(() => {
    calculateLastMonthProfit();
  }, [lastweekprofit]);

  const [lastWeekProfit, setLastWeekProfit] = useState(0);

  const calculateLastWeekProfit = () => {
    if (lastweekprofit.length > 0) {
      const lastWeekProfit = lastweekprofit[lastweekprofit.length - 1];
      setLastWeekProfit(lastWeekProfit);
    }
  };

  useEffect(() => {
    calculateLastWeekProfit();
  }, [lastweekprofit]);

  const [lastYearProfit, setLastYearProfit] = useState(0);

  const calculateLastYearProfit = () => {
    const weeksPerYear = 52; // Assuming 52 weeks per year
    const lastYearIndex = Math.floor(
      (lastweekprofit.length - 1) / weeksPerYear
    );
    let lastYearProfit = 0;

    for (let i = lastYearIndex * weeksPerYear; i < lastweekprofit.length; i++) {
      lastYearProfit += lastweekprofit[i];
    }

    setLastYearProfit(lastYearProfit);
  };

  useEffect(() => {
    calculateLastYearProfit();
  }, [lastweekprofit]);

  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="withdraw-card">
          <p>Last week Profit</p>
          <h3> $ {lastWeekProfit}</h3>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="withdraw-card">
          <p>Last Month Profit</p>
          <h3> $ {lastMonthProfit}</h3>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="withdraw-card">
          <p>Last year Profit</p>
          <h3> $ {lastYearProfit}</h3>
        </div>
      </div>
    </>
  );
};

export default WithdrawCard;

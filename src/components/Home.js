import React, { useState, useEffect } from "react";
import ContractCard from "./contracts/ContractCard";
import InvestorCard from "./Investor/InvestorCard";
import InvestCard from "./Invest/InvestCard";
import WithdrawContentCard from "./withraw/WithdrawContentCard";
import WithdrawCard from "./withraw/WithdrawCard";

import BarChart from "./barChart/BarChart";
import { UserData } from "./barChart/Data";

import { useTronContext } from "../Context/useContext";

function Home() {
  const [data, setData] = useState({
    labels: UserData.map((data) => data.week),
    datasets: [
      {
        label: "weekly profits",
        data: UserData.map((data) => data.userPrice),
        backgroundColor: ["#A83FC6"],
      },
    ],
  });

  const { lastweekprofit } = useTronContext();
  const [userData, setUserData] = useState(null);

  const ChartBar = () => {
    let newUserData = {
      labels: [],
      datasets: [
        {
          label: "Weekly Profits",
          data: [],
          backgroundColor: "#A83FC6",
        },
      ],
    };

    for (let i = 0; i < lastweekprofit.length; i++) {
      newUserData.labels.push(`Week ${i + 1}`);
      newUserData.datasets[0].data.push(`$ ${lastweekprofit[i]}`);
    }
    setUserData(newUserData);
  };

  useEffect(() => {
    ChartBar();
  }, []);
  return (
    <React.Fragment>
      <div className="home">
        {/* ============== Hero Section =================== */}
        <section className="hero cpb-6">
          <div className="container">
            <div className="hero-wrapper">
              <h1 className="hero-title">Dashboard</h1>
              <div className="row cpt-7">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                  <ContractCard
                    img="/images/contract-img.svg"
                    title="Contract"
                    dis1="Total investments:"
                    dis2="Total profits:"
                    dis3="Total investors:"
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                  <InvestorCard
                    img="/images/investor-img.svg"
                    title="Investor"
                    dis1="wallet balance:"
                    dis2="Your investments:"
                    dis3="Your profits:"
                    dis4="Your available profits:"
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                  <InvestCard
                    img="/images/invest-img.svg"
                    title1="Invest"
                    title2="Withdraw"
                    dis1="Approve Send"
                    dis2="Invest"
                    dis3="Withdraw profits:"
                    dis4="Withdraw"
                    dis5="Compound"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =============== Withdraw Initial Capital ================ */}
        <section className="withraw">
          <div className="container">
            <div className="withraw-wrapper-con">
              <div className="wihraw-header-content cpb-7">
                <div className="withraw-header-title">
                  <h1 className="hero-title withraw-title cpb-7">
                    Green Figures Investments
                  </h1>
                </div>
                <div className="withraw-header-title">
                  <h1 className="hero-title withraw-title">
                    Withdraw Initial Capital
                  </h1>
                </div>
              </div>
              <div className="witdraw-content cpb-6 ">
                <WithdrawContentCard
                  img="/images/investor-img.svg"
                  title="Withdraw Initial"
                  dis1="Available"
                  dis2="Request Withdraw"
                  dis3="chancel"
                />
              </div>
              <div className="withdraw-card-items row cpb-6">
                <WithdrawCard />
              </div>
            </div>
          </div>
        </section>
        {/* ===================== Withdraw Chart =========================== */}
        {userData > 0 ? (
          <section className="chart-box cpb-6">
            <div className="container">
              <div className="chart-box-wrapper">
                <BarChart chartData={userData} />
              </div>
            </div>
          </section>
        ) : (
          <section className="chart-box cpb-6">
            <div className="container">
              <div className="chart-box-wrapper">
                <BarChart chartData={data} />
              </div>
            </div>
          </section>
        )}
      </div>
    </React.Fragment>
  );
}

export default Home;

import React from "react";
import FigureLeft from "./figures/FigureLeft";
const WhitePaper = () => {
  return (
    <div className="home">
      <section className="Figures">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-3 col-md-12">
              <FigureLeft/>
            </div>
            <div className="col-lg-9 col-md-12">
              <div className="figure-Right">
                <div className="figure-title">
                  <h1>GOLEN GOOSE</h1>
                </div>
                <div className="figure-content-item">
                  <div className="figure-item figure-item-2">
                    <div className="figure-dis">
                      <p>100% Tvl Every Sunday</p>
                    </div>
                    <div className="figure-diss">
                      <p>All Profit Generated From Monday To Friday Are Sent On Saturdays</p>
                    </div>
                  </div>
                  <div className="figure-item">
                    <p className="forex-title1">Forex Traders</p>
                    <div className="figure-forex-img">
                      <img src="images/forex.svg" alt="" />
                    </div>
                  </div>
                  <div className="figure-item figure-item-3">
                    <div className="figure-trade">
                      <p>Trade from Monday To Friday</p>
                    </div>
                    <div className="trade-img">
                      <img src="images/trade.svg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="figure-title">
                  <h1>INVESTMENT</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhitePaper;


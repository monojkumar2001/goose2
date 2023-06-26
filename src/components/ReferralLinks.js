import copy from "copy-to-clipboard";
import { useState } from "react";
import { useTronContext } from "../Context/useContext";

const ReferralLinks = () => {

  const { refferalURL } = useTronContext();

  const [isCopied, setIsCopied] = useState(false);

  const hanldeCopy = (link) => {
    copy(link);
    setIsCopied(true);
  };
  return (
    <div className="home">
      <div className="referral-container">
        <h1 className="referral-title-name text-algin-center">Referral</h1>
        <div className="container">
          <div className="referral-link-item gap-5 d-flex justify-content-between align-items-center ">
            <span>{refferalURL}</span>
            <div className="referral-copy-btn">
              <button onClick={() => hanldeCopy(refferalURL)}>
                {" "}
                <img src="images/copy.svg" alt="" />
              </button>
              {isCopied && (
                <span className=" referrel-cope">Copied to clipboard</span>
              )}


            </div>
          </div>
        </div>
        <div className="referral-history-item">
          <h2 className="container">Referral History</h2>
          <div className="underline"></div>
          <p className="container">No Referral Yet.</p>
        </div>
      </div>
    </div>
  );
};

export default ReferralLinks;

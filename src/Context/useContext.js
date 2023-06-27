import React, { useState, useEffect, useContext, createContext } from "react";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./config";
import Web3Modal from "web3modal";
import Web3 from "web3";
export const TronContext = createContext();
export const useTronContext = () => useContext(TronContext);

export const ContextProvider = ({ children }) => {
  const [account, setAccount] = useState("");
  const [walletConnected, setWalletConnected] = useState(false);
  const [investmentAmount, setInvestmentAmount] = useState(0);
  const [walletBalance, setWalletBalance] = useState(0);

  const [investedAmountByInvestor, setInvestedAmountByInvestor] = useState(0);
  const [totalInvested, setTotalInvested] = useState(0);
  const [totalInvestors, setTotalInvestors] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);

  const [lastWeekProfit, setLastWeekProfit] = useState(0);

  const [profitsPaidToInvestor, setProfitsPaidToInvestor] = useState(0);
  const [profitEarnedHistoryByInvestor, setProfitEarnedHistoryByInvestor] =
    useState(0);

  const [UpdateReferrer, setUpdateReferrer] = useState("");
  const [refferalURL, setRefferalURL] = useState("");

  var upland = "0x16C17E35833e40d9EEADf587D6eC107F69dEF2B1";
  var referrer = "0x16C17E35833e40d9EEADf587D6eC107F69dEF2B1";

  // function getTronweb() {
  //   var obj = setInterval(async () => {
  //     if (window.tronWeb && window.tronWeb.ready) {
  //       clearInterval(obj);
  //       const tronWebState = {
  //         installed: !!window.tronWeb.ready,
  //         loggedIn: window.tronWeb.ready,
  //       };

  //       setAccount(
  //         tronWebState.loggedIn ? window.tronWeb.defaultAddress.base58 : null
  //       );
  //       setWalletConnected(tronWebState.loggedIn ? true : false);

  //       var tronWeb = window.tronWeb;

  //       setTronWeb(tronWeb);

  //       tronWeb.request({ method: "tron_requestAccounts" });

  //       const contract = await tronWeb.contract(CONTRACT_ABI,CONTRACT_ADDRESS);
  //       console.log(contract);
  //       setContract(contract);

  //     }
  //   });
  // }

  const getTronweb = async () => {
    try {
      const providerOptions = { rpcUrl: "https://rpc-mumbai.matic.today" };
      const web3modal = new Web3Modal({
        network: "mumbai",
        cacheProvider: true,
        providerOptions,
      });

      const provider = await web3modal.connect();
      const web3 = new Web3(provider);

      await window.ethereum.send("eth_requestAccounts");

      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      setAccount(account);

      setWalletConnected(true);
    } catch (err) {
      console.log(err);
    }
  };

  const balance = async () => {
    try {
      const providerOptions = { rpcUrl: "https://rpc-mumbai.matic.today" };
      const web3modal = new Web3Modal({
        network: "mumbai",
        cacheProvider: true,
        providerOptions,
      });

      const provider = await web3modal.connect();
      const web3 = new Web3(provider);
      const result = await web3.eth.getBalance(account);
      const balance = web3.utils.fromWei(result, "ether");
      const convert = parseFloat(balance).toFixed(5);
      setWalletBalance(convert);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async () => {
    try {
      const providerOptions = { rpcUrl: "https://rpc-mumbai.matic.today" };
      const web3modal = new Web3Modal({
        network: "mumbai",
        cacheProvider: true,
        providerOptions,
      });

      const provider = await web3modal.connect();
      const web3 = new Web3(provider);

      const contract = await new web3.eth.Contract(
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );

      const investmentAmountInWei = web3.utils.toWei(investmentAmount, "ether");
      await contract.methods.invest(investmentAmountInWei, upland).send({
        from: account,
        value: investmentAmountInWei,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const updateReferrer = async () => {
    try {
      const providerOptions = { rpcUrl: "https://rpc-mumbai.matic.today" };
      const web3modal = new Web3Modal({
        network: "mumbai",
        cacheProvider: true,
        providerOptions,
      });

      const provider = await web3modal.connect();
      const web3 = new Web3(provider);
      const contract = await new web3.eth.Contract(
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );

      upland = UpdateReferrer;
      console.log(UpdateReferrer);
      console.log(upland);
      await contract.methods.setReferrer(upland).send({
        from: account,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getTotalInvested = async () => {
    try {
      const providerOptions = { rpcUrl: "https://rpc-mumbai.matic.today" };
      const web3modal = new Web3Modal({
        network: "mumbai",
        cacheProvider: true,
        providerOptions,
      });

      const provider = await web3modal.connect();
      const web3 = new Web3(provider);
      const contract = await new web3.eth.Contract(
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );

      const result = await contract.methods.getTotalInvested().call();
      const convertedResult = web3.utils.fromWei(result, "ether");
      const convert = parseFloat(convertedResult).toFixed(5);
      setTotalInvested(convert);
    } catch (err) {
      console.log(err);
    }
  };

  const getTotalProfit = async () => {
    try {
      const providerOptions = { rpcUrl: "https://rpc-mumbai.matic.today" };
      const web3modal = new Web3Modal({
        network: "mumbai",
        cacheProvider: true,
        providerOptions,
      });

      const provider = await web3modal.connect();
      const web3 = new Web3(provider);
      const contract = await new web3.eth.Contract(
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );

      const result = await contract.methods.getTotalProfit().call();
      const convertedResult = web3.utils.fromWei(result, "ether");
      const convert = parseFloat(convertedResult).toFixed(5);
      setTotalProfit(convert);
    } catch (err) {
      console.log(err);
    }
  };

  const getTotalInvestors = async () => {
    try {
      const providerOptions = { rpcUrl: "https://rpc-mumbai.matic.today" };
      const web3modal = new Web3Modal({
        network: "mumbai",
        cacheProvider: true,
        providerOptions,
      });

      const provider = await web3modal.connect();
      const web3 = new Web3(provider);
      const contract = await new web3.eth.Contract(
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );
      const result = await contract.methods.getTotalInvestors().call();
      const convertedResult = web3.utils.fromWei(result, "ether");
      const convert = parseFloat(convertedResult).toFixed(5);
      setTotalInvestors(convert);
    } catch (err) {
      console.log(err);
    }
  };

  const getInvestedAmountByInvestor = async () => {
    try {
      const providerOptions = { rpcUrl: "https://rpc-mumbai.matic.today" };
      const web3modal = new Web3Modal({
        network: "mumbai",
        cacheProvider: true,
        providerOptions,
      });

      const provider = await web3modal.connect();
      const web3 = new Web3(provider);

      const contract = await new web3.eth.Contract(
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );

      const result = await contract.methods
        .getInvestedAmountByInvestor(account)
        .call({ from: account });
      const converted = web3.utils.fromWei(result, "ether");
      const convert = parseFloat(converted).toFixed(5);
      setInvestedAmountByInvestor(convert);
    } catch (err) {
      console.log(err);
    }
  };

  const getProfitsPaidToInvestor = async () => {
    try {
      const providerOptions = { rpcUrl: "https://rpc-mumbai.matic.today" };
      const web3modal = new Web3Modal({
        network: "mumbai",
        cacheProvider: true,
        providerOptions,
      });

      const provider = await web3modal.connect();
      const web3 = new Web3(provider);
      const contract = await new web3.eth.Contract(
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );
      const result = await contract.methods
        .getProfitsPaidToInvestor(account)
        .call({ from: account });

      setProfitsPaidToInvestor(result);
    } catch (err) {
      console.log(err);
    }
  };

  const requestWithdrawOfInitialInvestment = async () => {
    try {
      const providerOptions = { rpcUrl: "https://rpc-mumbai.matic.today" };
      const web3modal = new Web3Modal({
        network: "mumbai",
        cacheProvider: true,
        providerOptions,
      });

      const provider = await web3modal.connect();
      const web3 = new Web3(provider);
      const contract = await new web3.eth.Contract(
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );

      await contract.methods
        .requestWithdrawOfInitialInvestment()
        .call({ from: account });
    } catch (err) {
      console.log(err);
    }
  };

  const cancelRequestForWithdrawOfInitialInvestment = async () => {
    try {
      const providerOptions = { rpcUrl: "https://rpc-mumbai.matic.today" };
      const web3modal = new Web3Modal({
        network: "mumbai",
        cacheProvider: true,
        providerOptions,
      });

      const provider = await web3modal.connect();
      const web3 = new Web3(provider);
      const contract = await new web3.eth.Contract(
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );

      await contract.methods
        .cancelRequestForWithdrawOfInitialInvestment()
        .call({ from: account });
    } catch (err) {
      console.log(err);
    }
  };

  const getProfitEarnedHistoryByInvestor = async () => {
    try {
      const providerOptions = { rpcUrl: "https://rpc-mumbai.matic.today" };
      const web3modal = new Web3Modal({
        network: "mumbai",
        cacheProvider: true,
        providerOptions,
      });

      const provider = await web3modal.connect();
      const web3 = new Web3(provider);

      const contract = await new web3.eth.Contract(
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );

      const result = await contract.methods
        .getProfitEarnedHistoryByInvestor(account)
        .call();

      const convertedAmount = web3.utils.fromWei(result, "ether");
      const convert = parseFloat(convertedAmount).toFixed(5);
      setProfitEarnedHistoryByInvestor(convert);
    } catch (err) {
      console.log(err);
    }
  };

  const withdrawProfit = async () => {
    try {
      const providerOptions = { rpcUrl: "https://rpc-mumbai.matic.today" };
      const web3modal = new Web3Modal({
        network: "mumbai",
        cacheProvider: true,
        providerOptions,
      });

      const provider = await web3modal.connect();
      const web3 = new Web3(provider);
      const contract = await new web3.eth.Contract(
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );

      await contract.methods.withdrawProfit().send({
        from: account,
        gasLmit: 3000000,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const compoundProfit = async () => {
    try {
      const providerOptions = { rpcUrl: "https://rpc-mumbai.matic.today" };
      const web3modal = new Web3Modal({
        network: "mumbai",
        cacheProvider: true,
        providerOptions,
      });

      const provider = await web3modal.connect();
      const web3 = new Web3(provider);
      const contract = await new web3.eth.Contract(
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );

      await contract.methods.compoundProfit().send({
        from: account,
        gasLmit: 3000000,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getWeeklyProfit = async () => {
    try {
      const providerOptions = { rpcUrl: "https://rpc-mumbai.matic.today" };
      const web3modal = new Web3Modal({
        network: "mumbai",
        cacheProvider: true,
        providerOptions,
      });

      const provider = await web3modal.connect();
      const web3 = new Web3(provider);
      const contract = await new web3.eth.Contract(
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );

      const result = await contract.methods.getWeeklyProfit().call({
        from: account,
      });

      if (result && result.length > 0) {
        const lastWeekProfit = result[result.length - 1];

        const convertedResult = web3.utils.fromWei(lastWeekProfit, "ether");
        const convert = parseFloat(convertedResult).toFixed(5);

        setLastWeekProfit(convert);
      } else {
        console.log("No weekly profit data found.");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getRequestedWithdrawByInvestor = async () => {
    try {
      const providerOptions = { rpcUrl: "https://rpc-mumbai.matic.today" };
      const web3modal = new Web3Modal({
        network: "mumbai",
        cacheProvider: true,
        providerOptions,
      });

      const provider = await web3modal.connect();
      const web3 = new Web3(provider);
      const contract = await new web3.eth.Contract(
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );

      await contract.methods
        .getRequestedWithdrawByInvestor(account)
        .call({ from: account });
    } catch (err) {
      console.log(err);
    }
  };

  const referrals = async () => {
    try {
      const providerOptions = { rpcUrl: "https://rpc-mumbai.matic.today" };
      const web3modal = new Web3Modal({
        network: "mumbai",
        cacheProvider: true,
        providerOptions,
      });

      const provider = await web3modal.connect();
      const web3 = new Web3(provider);
      const contract = await new web3.eth.Contract(
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );

      await contract.methods.referrals(account).call({ from: account });
    } catch (err) {
      console.log(err);
    }
  };

  const [userAvailableProfit, setUserAvailableProfit] = useState(0);

  const getProfitAvailable = async () => {
    try {
      const providerOptions = { rpcUrl: "https://rpc-mumbai.matic.today" };
      const web3modal = new Web3Modal({
        network: "mumbai",
        cacheProvider: true,
        providerOptions,
      });

      const provider = await web3modal.connect();
      const web3 = new Web3(provider);

      const contract = await new web3.eth.Contract(
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );

      const result = await contract.methods
        .getProfitAvailable(account)
        .call({ from: account });

      const convertedResult = web3.utils.fromWei(result, "ether");
      const convert = parseFloat(convertedResult).toFixed(5);

      setUserAvailableProfit(convert);
    } catch (err) {
      console.log(err);
    }
  };

  const copeRef = () => {
    try {
      var copeText;
      copeText = window.location.origin + "/ref=" + account;
      navigator.clipboard.writeText(copeText);
      setRefferalURL(copeText);
    } catch (e) {
      console.log(e);
    }
  };

  const getUrlParameter = (sParam) => {
    const sPageURL = window.location.search.substring(1);
    let sURLVariables = sPageURL.split("&");
    let sParameterName;
    let i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split("=");
      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined
          ? true
          : decodeURIComponent(sParameterName[1]);
      }
    }
  };

  var refurl = getUrlParameter(UpdateReferrer);
  if (refurl) {
    const redirectFlag = localStorage.getItem("redirectFlag");

    if (!redirectFlag) {
      localStorage.setItem("ref", refurl);
      window.location.href = "/";
      localStorage.setItem("redirectFlag", "true");
    }
  }

  useEffect(() => {
    if (!walletConnected) {
      getTronweb();
    }
  }, [walletConnected]);

  useEffect(() => {
    copeRef();
  }, []);

  useEffect(() => {
    if (walletConnected) {
      balance();
      getProfitAvailable();
      getWeeklyProfit();
      getRequestedWithdrawByInvestor();
      getTotalInvested();
      getTotalInvestors();
      getTotalProfit();
      getInvestedAmountByInvestor();
      getProfitsPaidToInvestor();
      getProfitEarnedHistoryByInvestor();
      referrals();
    }
  }, [walletConnected]);

  return (
    <TronContext.Provider
      value={{
        walletConnected,
        account,
        handleSubmit,
        getTronweb,
        withdrawProfit,
        compoundProfit,
        updateReferrer,
        userAvailableProfit,
        profitEarnedHistoryByInvestor,
        profitsPaidToInvestor,
        totalProfit,
        totalInvestors,
        totalInvested,
        investedAmountByInvestor,
        walletBalance,
        setInvestmentAmount,
        investmentAmount,
        requestWithdrawOfInitialInvestment,
        cancelRequestForWithdrawOfInitialInvestment,
        lastWeekProfit,
        setUpdateReferrer,
        UpdateReferrer,
        refferalURL,
      }}
    >
      {children}
    </TronContext.Provider>
  );
};

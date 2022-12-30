import styles from './bitcoin.module.css';
import React, {useEffect, useState} from 'react';
import { RootObjectBitcoin } from "../../types";



const Bitcoin= () => {
  const [usd, setUsd] = useState("");
  const [gbp, setGbp] = useState("");
  const [eur, setEur] = useState("");
  const [time, setTime] = useState("");
  const loadBitcoinWorth= async() => {
    let response = await fetch ("https://api.coindesk.com/v1/bpi/currentprice.json")
    let stock: RootObjectBitcoin  = await response.json();
    setTime(stock.time.updateduk);
    setUsd(stock.bpi.USD.rate);
    setGbp(stock.bpi.GBP.rate);
    setEur(stock.bpi.EUR.rate);
  }
  useEffect(() => {
    loadBitcoinWorth();
  }, []);
  return (
    <div className={styles.App}>
      <h1 className={styles.textpadding} >Bitcoin Worth</h1>
      <p className={styles.textpadding} >Time: {time} </p>
      <p className={styles.textpadding} >Worth in USD: {usd} </p>
      <p className={styles.textpadding} >Worth in GBP: {gbp} </p>
      <p className={styles.textpadding} >Worth in EUR: {eur} </p>
      <div>
        <button onClick={loadBitcoinWorth}>Refresh</button>
      </div>
    </div>
  );
}


export default Bitcoin;
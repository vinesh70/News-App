import { useState } from "react";
import axios from "axios";
import Result from "./Result";

export default function News() {
  const [info, setInfo] = useState([]);
  const [cntry, setCountry] = useState("in");

  const hCountry = (event) => {
    setCountry(event.target.value);
  };

  const gn = (event) => {
    event.preventDefault();

    let n1 = "https://newsapi.org/v2/top-headlines";
    let n2 = `?country=${cntry}`;
    let n3 = "&apiKey=a0a41e192b184fe2bab2332a3f5748cb";

    let url = n1 + n2 + n3;
    axios
      .get(url)
      .then((res) => setInfo(res.data.articles))
      .catch((err) => setInfo("Issue " + err));
  };

  return (
    <>
      <center>
        <h1>News App</h1>
        <form onSubmit={gn}>
          <label>Select Country</label> &nbsp;
          <select value={cntry} onChange={hCountry}>
            <option value="ar">Argentina</option>
            <option value="at">Austria</option>
            <option value="au">Australia</option>
            <option value="be">Belgium</option>
            <option value="bg">Bulgaria</option>
            <option value="br">Brazil</option>
            <option value="ca">Canada</option>
            <option value="ch">Switzerland</option>
            <option value="cn">China</option>
            <option value="co">Colombia</option>
            <option value="cu">Cuba</option>
            <option value="cz">Czech Republic</option>
            <option value="de">Germany</option>
            <option value="eg">Egypt</option>
            <option value="fr">France</option>
            <option value="gb">United Kingdom</option>
            <option value="gr">Greece</option>
            <option value="hk">Hong Kong</option>
            <option value="hu">Hungary</option>
            <option value="id">Indonesia</option>
            <option value="ie">Ireland</option>
            <option value="il">Israel</option>
            <option value="in">India</option>
            <option value="it">Italy</option>
            <option value="jp">Japan</option>
            <option value="kr">South Korea</option>
            <option value="lt">Lithuania</option>
            <option value="lv">Latvia</option>
            <option value="ma">Morocco</option>
            <option value="mx">Mexico</option>
            <option value="my">Malaysia</option>
            <option value="ng">Nigeria</option>
            <option value="nl">Netherlands</option>
            <option value="no">Norway</option>
            <option value="nz">New Zealand</option>
            <option value="ph">Philippines</option>
            <option value="pl">Poland</option>
            <option value="pt">Portugal</option>
            <option value="ro">Romania</option>
            <option value="rs">Serbia</option>
            <option value="ru">Russia</option>
            <option value="sa">Saudi Arabia</option>
            <option value="se">Sweden</option>
            <option value="sg">Singapore</option>
            <option value="si">Slovenia</option>
            <option value="sk">Slovakia</option>
            <option value="th">Thailand</option>
            <option value="tr">Turkey</option>
            <option value="tw">Taiwan</option>
            <option value="ua">Ukraine</option>
	    <option value="ae">United Arab Emirates</option>
            <option value="us">United States</option>
            <option value="ve">Venezuela</option>
            <option value="za">South Africa</option>
          </select>{" "}
          <br /> <br />
          <input type="submit" value="Get News" />
        </form>  
      {info.map((e, index) => (
          <Result number={index + 1} title={e.title} description={e.description} url={e.url} />
        ))}
	</center>
    </>
  );
}
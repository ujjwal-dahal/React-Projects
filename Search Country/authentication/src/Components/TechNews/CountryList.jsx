import { useEffect, useState } from "react";
import styles from "./CountryListCss/CountryList.module.css";
import axios from "axios";

let CountryList = () => {
  let url = "https://restcountries.com/v3.1/all"; //url to fetch data

  let [searchValue, setSearchValue] = useState(""); //user le search gareko value

  let [countryData, setCountryData] = useState([]); //api bata fetch bhako data 

  let [searchFilter, setSearchFilter] = useState([]); //filter gareko array country name 

  let countryApi = async () => {
    try {
      let response = await axios.get(url);
      setCountryData(response.data);
      setSearchFilter(response.data);
      console.log("Data Got Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    countryApi();
    
  },[]) //jaba component mount huncha taba data fetch huncha
  
  let handleSearch = (event) => {
    setSearchValue(event.target.value);
  }; //user le search gareko data


  useEffect(() => {
    if(searchValue === "") {
        setSearchFilter(countryData)  //search chaina bhane searchFilter ma countryData nai value huncha
    }
    else {
      setSearchFilter(
        countryData.filter((country) => 
          country.name.common.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
  }, [searchValue, countryData]);



  return (
    <>
      <div className={styles["main-container"]}>
        <input
          type="search"
          name=""
          id=""
          value={searchValue}
          onChange={handleSearch}
          className={styles["search-bar"]}
          placeholder=" 🔍 Search for a country..."
        />
        <div className={styles["semi-container"]}>
          {searchFilter.map((country, index) => {
            return (
              <div className={styles["country-container"]} key={index}>
                <img
                  src={country.flags.png}
                  alt=""
                  srcSet=""
                  className={styles["country-flag"]}
                />
                <p className={styles["country-name"]}>{country.name.common}</p>
                <p className={styles["country-capital"]}>
                  <b>Capital :</b> {country.capital}
                </p>
                <p className={styles["country-population"]}>
                  <b>Population :</b> {country.population}
                </p>
                <p className={styles["country-region"]}>
                  <b>Region :</b> {country.region}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CountryList;

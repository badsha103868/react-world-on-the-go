import React, { useState } from 'react';
 import './Country.css';

const Country = ({country,handleVisitedCountries}) => {

  // console.log(handleVisitedCountries)
  // useState for button click visited/not visited
  const [visited, setVisited] = useState(false)




  const currencyEntries = Object.entries(country.currencies.currencies);

  // console.log(currencyEntries)
  // console.log(country.capital.capital[0])
  // console.log(country.population.population);
    
  const handleVisited =()=>{
    // setVisited(true);
    // jodi akbar click korar por punrai click kori tahola not visited dakabe

    //  basic system

    // if(visited){
    //   setVisited(false);
    // }
    // else{
    //   setVisited(true);
    // }

  //  2nd system
    // ata turnary operator diya korte
    // setVisited(visited? false: true)

    // third system
    setVisited(!visited)
    handleVisitedCountries(country);
  }

  return (
    <div className={`country ${visited && 'country-visited'}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>

      <p>Population: {country.population.population} </p>

      <p>Capital: {country.capital.capital[0]}</p>

       <p>Area: {country.area.area}
         {country.area.area> 300000? " Big Country":" Small Country"}</p>
         
      <p>Currencies: {currencyEntries.map(([code, info]) => <li key={code}>{code} → {info.name} ({info.symbol})</li> )}</p>

     <button onClick={handleVisited}>
      {visited? "Visited" : "Not visited"}
     </button>
    </div>  
  );
};

export default Country;

// {
//     "name": {
//         "common": "Vietnam",
//         "official": "Socialist Republic of Vietnam"
//     },
//     "ccn3": {
//         "ccn3": "704"
//     },
//     "currencies": {
//         "currencies": {
//             "VND": {
//                 "name": "Vietnamese đồng",
//                 "symbol": "₫"
//             }
//         }
//     },
//     "capital": {
//         "capital": [
//             "Hanoi"
//         ]
//     },
//     "region": {
//         "region": "Asia"
//     },
//     "languages": {
//         "languages": {
//             "vie": "Vietnamese"
//         }
//     },
//     "area": {
//         "area": 331212
//     },
//     "cca3": {
//         "cca3": "VNM"
//     },
//     "population": {
//         "population": 97338583
//     },
//     "continents": {
//         "continents": [
//             "Asia"
//         ]
//     },
//     "flags": {
//         "flags": {
//             "png": "https://flagcdn.com/w320/vn.png",
//             "svg": "https://flagcdn.com/vn.svg",
//             "alt": "The flag of Vietnam features a large five-pointed yellow star on a red field."
//         }
//     }
// }
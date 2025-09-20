import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
  // koita desha gesi sheta count korte state use
  const [visitedCountries, setVisitedCountries] = useState([])

  // handle visted countries 
   const handleVisitedCountries =(country)=>{
    console.log("handle viisited country clicked", country);
   }



  const countriesData = use(countriesPromise)
  const countries = countriesData.countries;
  console.log(countries);
  return (
    <div >
      <h1>In the Countries: {countries.length}</h1>
      {/* koita country visit korsi tar hishab */}
      <h3>Total country Visited:</h3>
      <div className='countries'>
        {
        countries.map(country => <Country key={country.cca3.cca3} country= {country} handleVisitedCountries={handleVisitedCountries}></Country>)
      }
      </div>
    </div>
  );
};

export default Countries;
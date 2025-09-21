import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
  // koita desha gesi sheta count korte state use
  const [visitedCountries, setVisitedCountries] = useState([])
 const [visitedFlags,setVisitedFlags]= useState([]);
  // handle visted countries 
   const handleVisitedCountries =(country)=>{
    // console.log("handle viisited country clicked", country);
   
    const newVisitedCountries = [...visitedCountries,country];
    setVisitedCountries(newVisitedCountries);
   }
    
  //  handle visited flags
  const handleVisitedFlag = (flag)=>{
    // console.log('flag need to be added',flag)
    const newVisitedFlags = [...visitedFlags,flag];
    setVisitedFlags(newVisitedFlags);
  }


  const countriesData = use(countriesPromise)
  const countries = countriesData.countries;
  console.log(countries);
  return (
    <div >
      <h1>In the Countries: {countries.length}</h1>
      {/* country falgs */}
      <h3>Total Flags Visited : {visitedFlags.length}</h3>
      {/* koita country visit korsi tar hishab */}
      <h3>Total country Visited: {visitedCountries.length}</h3>
    {/* j koita desh visit korsi tar name dekhate */}
    <ol>
      {visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)}
    </ol>

    {/* flag dekhate */}
     <div className='visited-flags-container'>
      {
        visitedFlags.map((flag,index) => <img key={index} src={flag}></img>)
      }
     </div>
      <div className='countries'> 
        {
        countries.map(country => <Country key={country.cca3.cca3} country= {country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlag={handleVisitedFlag}></Country>)
      }
      </div>
    </div>
  );
};

export default Countries;
import { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country';
import './Countries.css'

const Countries = () => {
   const[countries, setCountries] = useState([]);
   useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res =>res.json())
    .then(data => setCountries(data));
   },[])
    return (
        <>
           <p>Countries : {countries.length}</p> 
           <div className='contry-container'>
           {
            countries.map(country => <Country country={country} key={country.cca3}></Country>)
           }
           </div>
           
        </>
    );
};

export default Countries;
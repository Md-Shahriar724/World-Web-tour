import "./Country.css";

const Country = ({ country }) => {
  const { name, flags, population, area, cca3 } = country;
  console.log(country);

  return (
    <div className="box">
      <p>Country Name : {name?.common}</p>
      <img src={flags.png} className='flag-image' alt="" />
      <p>Population : {population}</p>
      <p>Area : {area}</p>
      <p>Country Code : {cca3}</p>
      <button>Visited</button>
    </div>
  );
};

export default Country;

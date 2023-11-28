import "./Country.css";

const Country = ({ country }) => {
  const { name, flags } = country;
  console.log(country);

  return (
    <div className="box">
      <p>Country Name : {name?.common}</p>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default Country;

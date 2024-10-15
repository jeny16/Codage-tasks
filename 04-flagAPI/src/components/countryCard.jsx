// CountryCard.js
import React from "react";

const CountryCard = ({ country }) => {
  return (
    <div key={country.cca3} className="bg-white w-4/12 shadow-md rounded-lg p-6 m-4">
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{country.name.common}</h3>
      <p className="text-gray-700">Population: <span className="font-medium">{country.population.toLocaleString()}</span></p>
      <p className="text-gray-700">Region: <span className="font-medium">{country.region}</span></p>
      <p className="text-gray-700">Borders: <span className="font-medium">{country.borders ? country.borders.join(', ') : 'None'}</span></p>
    </div>
  );
};

export default CountryCard;

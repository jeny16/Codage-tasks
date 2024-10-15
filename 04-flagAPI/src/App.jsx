import { useState, useEffect } from "react";
import CountryCard from "./components/countryCard"; // Import the new component
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");

        if (!response.ok) {
          throw new Error(`Response Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <h2 className="text-center text-2xl">Loading...</h2>;
  if (error) return <h2 className="text-center text-red-500">Error: {error}</h2>;

  const countriesToDisplay = ['India', 'Russia', 'Gibraltar', 'Denmark', 'Cameroon', 'Bahrain'];

  return (
    <div className="container mx-auto p-4 flex flex-wrap">
      {data
        .filter(country => countriesToDisplay.includes(country.name.common)) // Filter for specific countries
        .map(country => (
          <CountryCard key={country.cca3} country={country} />
        ))}
    </div>
  );
}

export default App;

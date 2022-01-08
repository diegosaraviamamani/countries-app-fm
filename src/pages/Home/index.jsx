import { useState, useEffect } from 'react'
import { Header, CountryCard } from '../../components'
import './index.css';

function Home() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className='wrapper'>
      <Header />
      <div className='countries-list'>
        {countries.map((country) => <CountryCard key={country.name} {...country} />)}
      </div>
    </div>
  );
}

export default Home;

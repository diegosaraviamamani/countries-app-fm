import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../../components'
import './index.css';

function Country() {
  const params = useParams()
  const navigate = useNavigate()

  const [country, setCountry] = useState({})
  useEffect(() => {
    fetch(`https://restcountries.com/v2/alpha/${params.id}`)
      .then((response) => response.json())
      .then((data) => setCountry(data))
      .catch((error) => console.log(error))
  }, [params.id])

  return (
    <div className='wrapper'>
      <Header />
      <div className='container'>
        <div>
          <button className='backButton' onClick={() => navigate(-1)}>Back</button>
        </div>
        <div className='info'>
          <img src={country.flag} alt="" />
          <div className="details">
            <p>{country.name}</p>
            <div className='first-section'>
              <p><span>Native Name:</span> {country.nativeName}</p>
              <p><span>Population:</span> {country.population}</p>
              <p><span>Region:</span> {country.region}</p>
              <p><span>Subregion:</span> {country.subregion}</p>
              <p><span>Capital:</span> {country.capital}</p>
            </div>
            <div className='second-section'>
              <p><span>Top Level Domain:</span> {country.topLevelDomain}</p>
              <p><span>Currencies:</span> {country.currencies?.map(currency => currency.name)}</p>
              <p><span>Languages:</span> {country.languages?.map(language => language.name)}</p>
            </div>
            <div className='third-section'>
              <p>
                <span>Border Countries:</span>
                <div className='borders'>
                  {country.borders?.map(border => <span>{border}</span>)}
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;

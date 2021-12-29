import './index.css'

const CountryCard = ({
  name,
  population = "NO SE CONOCE",
  region = "SIN ESPECIFICAR",
  capital = "NO SE CONOCE",
  flags = 'https://via.placeholder.com/500?text=BANDERA',
}) => (
  <div className='card'>
    <img className='card-image' src={flags.png} alt={name} />
    <div className='card-content'>
      <h3 className='card-title'>{name}</h3>
      <p className='card-text'><span>Population: </span> {population}</p>
      <p className='card-text'><span>Region: </span> {region}</p>
      <p className='card-text'><span>Capital: </span> {capital}</p>
    </div>
  </div>
)

export default CountryCard
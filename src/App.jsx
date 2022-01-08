import './App.css';
import routeList from './router'
import { useRoutes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      {useRoutes(routeList)}
    </div>
  )
}

export default App;

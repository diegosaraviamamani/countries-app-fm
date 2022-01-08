import { Home, Country } from './pages'

const routeList = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/:id',
    element: <Country />,
  },
  {
    path: '/contact',
    element: <div>Contact</div>,
  },
]

export default routeList;
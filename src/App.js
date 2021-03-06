import { BrowserRouter as Router } from 'react-router-dom'
import 'aos/dist/aos.css'
import './App.css'
import routes from './routes'
import PrivateRoute from './routes/Private'
import PublicRoute from './routes/Public'
import SplitRoute from './routes/Split'
import AOS from 'aos';

const base = process.env.PUBLIC_URL || '/'
function App() {
  AOS.init();
  return (
    <Router basename={base}>
      {routes.map((route) => {
        if (route.auth && route.fallback) {
          return <SplitRoute key={route.path} {...route} />
        } else if (route.auth) {
          return <PrivateRoute key={route.path} {...route} />
        }
        return <PublicRoute key={route.path} {...route} />
      })}
    </Router>
  )
}

export default App

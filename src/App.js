import './App.css';
import { useRoutes } from 'react-router-dom';
import Routes from './routes'

function App() {

  let routes = useRoutes(Routes)

  return (
    <div>
      {routes}
    </div>
  );
}

export default App;

import './App.css';
import { useRoutes } from 'react-router-dom';
import Routes from './routes'

function App() {

  let routes = useRoutes(Routes)

  return (
    <div >
      <div class="bg-animation">
        <div id="stars"></div>
      </div>
      {routes}
    </div>
  );
}

export default App;

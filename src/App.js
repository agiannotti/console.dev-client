import Main from './Components/Main';
import { Route, Router } from 'react-router-dom';
import history from '../src/Components/Context/history';

function App() {
  return (
    <div className='App'>
      <Router history={history}>
        <Route exact path='/' component={Main} />
      </Router>
    </div>
  );
}

export default App;

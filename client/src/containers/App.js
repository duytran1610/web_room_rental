import {Routes, Route} from 'react-router-dom';
import {Home, Login} from './Public';
import {path} from '../utils/constant';

function App() {
  return (
    <div className="App h-screen w-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />} >          
          <Route path={path.LOGIN} element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

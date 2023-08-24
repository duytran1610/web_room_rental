import {Routes, Route} from 'react-router-dom';
import {Home, Login, RentalApartment, RentalRoom, RentalHouse, RentalSpace, Homepage} from './Public';
import {path} from '../utils/constant';

function App() {
  return (
    <div className="App h-screen w-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />} >  
          <Route index element={<Homepage />} />        
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.CTCN} element={<RentalApartment />} />
          <Route path={path.CTMB} element={<RentalSpace />} />
          <Route path={path.CTPT} element={<RentalRoom />} />
          <Route path={path.NCT} element={<RentalHouse />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import {Routes, Route} from 'react-router-dom';
import {Home, Login, Rental, Homepage, DetailPost} from './Public';
import {path} from '../utils/constant';

function App() {
  return (
    <div className="App bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />} >  
          <Route index element={<Homepage />} />     
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.CTCN} element={<Rental />} />
          <Route path={path.CTMB} element={<Rental />} />
          <Route path={path.CTPT} element={<Rental />} />
          <Route path={path.NCT} element={<Rental />} />
          <Route path={path.DETAIL_POSTS__TITLE__POSTID} element={<DetailPost />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

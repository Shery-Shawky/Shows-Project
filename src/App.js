import React from 'react';
import {Route,Routes} from 'react-router-dom'

import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import ShowsPage from './pages/ShowsPage';
import Header from './components/layout/Header';

function App() {
  return (
    <React.Fragment>
      <Header/>
    <Routes>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/search' element={<SearchPage/>}/>      
      <Route path='/shows/:id' element={<ShowsPage/>}/>            
    </Routes>
     </React.Fragment>
  );
}

export default App;

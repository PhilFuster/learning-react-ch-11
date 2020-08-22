import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import {
  Home,
  About,
  Events,
  Products,
  Contact,
  Whoops404,
  Services,
  History,
  Location,
} from './components/Pages';
function App() {
  // let element = useRoutes([
  //   { path: '/', element: <Home /> },
  //   {
  //     path: 'about',
  //     element: <About />,
  //     children: [
  //       {
  //         path: 'services',
  //         element: <Services />,
  //       },
  //       {
  //         path: 'history',
  //         element: <History />,
  //       },
  //       {
  //         path: 'location',
  //         element: <Location />,
  //       },
  //     ],
  //   },
  //   {
  //     path: 'events',
  //     element: <Events />,
  //   },
  //   {
  //     path: 'products',
  //     element: <Products />,
  //   },
  //   {
  //     path: 'contact',
  //     element: <Contact />,
  //   },
  //   {
  //     path: '*',
  //     element: <Whoops404 />,
  //   },
  //   {
  //     path: 'services',
  //     redirectTo: 'about/services',
  //   },
  // ]);
  // return element;

  let navigate = useNavigate();
  let location = useLocation();
  useEffect(() => {
    if (location.pathname === '/services') {
      navigate('/about/services');
    }
  });
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}>
          <Route path='services' element={<Services />} />
          <Route path='history' element={<History />} />
          <Route path='location' element={<Location />} />
        </Route>
        <Route path='/events' element={<Events />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Whoops404 />} />
      </Routes>
    </div>
  );
}

export default App;

import React, { Suspense } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import MovieProvider from './contexts/MovieContext';

import './App.scss';

const App = () => {
  const Movies = React.lazy(() => import('./pages/movies'));
  const DetailMovie = React.lazy(() => import('./pages/detail-movie'));
  return (
    <div className="container">
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <h1 className='homepage-title'>Welcome to home page. Please go to <Link to='/movies'>Movie Page</Link></h1>}
        />
        <Route
          exact
          path="/movies"
          render={(props) => (
            <Suspense fallback={<div className='loading-screen'>Loading...</div>}>
              <MovieProvider>
                <Movies {...props} />
              </MovieProvider>
            </Suspense>
          )}
        />
        <Route
          path="/movies/:id"
          render={(props) => (
            <Suspense fallback={<div className='loading-screen'>Loading...</div>}>
              <MovieProvider>
                <DetailMovie {...props} />
              </MovieProvider>
            </Suspense>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;

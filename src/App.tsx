import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';

const Home = React.lazy(() => import('./pages/home/Home'));
const AddPost = React.lazy(() => import('./pages/addPost/AddPost'));

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/"
          element={
            <Suspense fallback={<div>Loading</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route path="/add"
          element={
            <Suspense fallback={<div>Loading</div>}>
              <AddPost />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import AddPost from './pages/addPost/AddPost';
import Home from './pages/home/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddPost />} />
      </Routes>
    </Router>
  );
};

export default App;

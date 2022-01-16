import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import Login from '../pages/Login';
import NewBlog from '../pages/NewBlog';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import UpdateBlog from '../pages/UpdateBlog';

const AppRouter = () => {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Dashboard />} />
          
          <Route path="/details" element={<Details />} />
          <Route path="/new-blog" element={<NewBlog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/update-blog" element={<UpdateBlog />} />
        </Routes>
      </Router>
    );
}

export default AppRouter;

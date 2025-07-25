import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductForm from './components/ProductForm/ProductForm';
import Login from './components/Login/Login';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleForm = () => setShowForm(prev => !prev);
  const toggleLogin = () => setShowLogin(prev => !prev);

  return (
    <div>
      <Navbar onCartClick={toggleForm} onLoginClick={toggleLogin} />
      {showForm && <ProductForm />}
      {showLogin && <Login />}
    </div>
  );
};

export default App;

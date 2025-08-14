import React, { useState, useEffect } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

function App() {
  const [refresh, setRefresh] = useState(false);
  const [user, setUser] = useState(null);

  const triggerRefresh = () => setRefresh(!refresh);

  useEffect(() => {
    // Check token in localStorage on load
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (token && username) {
      setUser({ username }); // assume user is logged in
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('username', userData.username);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setUser(null);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>🧾 Inventory System</h1>

      {user ? (
        <>
          <h3>Welcome, {user.username}</h3>
          <button onClick={handleLogout}>Logout</button>
          <hr />
          <ProductForm onProductAdded={triggerRefresh} />
          <ProductList key={refresh} />
        </>
      ) : (
        <>
          <SignupForm />
          <hr />
          <LoginForm onLogin={handleLogin} />
        </>
      )}
    </div>
  );
}

export default App;

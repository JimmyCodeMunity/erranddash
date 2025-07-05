import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

// Create the authentication context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API base URL
  // const API_URL = 'http://localhost:5000/api/v1';
  const API_URL = 'https://haus.menthealventures.com/api/v1';
//   const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1/agent/';

  // Check if user is authenticated on initial load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = Cookies.get('token');
        if (token) {
          // Verify token and get user data
          const response = await axios.post(`${API_URL}/company/getcompanydata`, { token });
          if (response.data.status === 'success') {
            setUser(response.data.data);
          } else {
            // Token is invalid, clear cookies
            Cookies.remove('token');
            setUser(null);
          }
        }
      } catch (error) {
        console.error('Auth check error:', error);
        // Clear cookies on error
        Cookies.remove('token');
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [API_URL]);

  // Login function
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${API_URL}/company/companylogin`, { email, password });
      
      if (response.data.status === 'success') {
        const { token } = response.data.data;
        
        // Set token in cookies with expiration
        Cookies.set('token', token, { expires: 1 }); // 1 day expiration
        
        // Get user data
        const userResponse = await axios.post(`${API_URL}/company/getcompanydata`, { token });
        if (userResponse.data.status === 'success') {
          setUser(userResponse.data.data);
          return true;
        }
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      setError(error.response?.data?.message || 'Login failed. Please try again.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Register function
  const register = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${API_URL}/agent/agentregistration`, userData);
      
      if (response.data.status === 'success') {
        // Auto login after registration
        return await login(userData.email, userData.password);
      }
      return false;
    } catch (error) {
      console.error('Registration error:', error);
      setError(error.response?.data?.message || 'Registration failed. Please try again.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    Cookies.remove('token');
    setUser(null);
  };

  // Refresh token function
  const refreshToken = async () => {
    try {
      const token = Cookies.get('token');
      if (!token) return false;
      
      const response = await axios.post(`${API_URL}/company/getcompanydata`, { token });
      if (response.data.status === 'success') {
        setUser(response.data.data);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Token refresh error:', error);
      logout();
      return false;
    }
  };

  // Context value
  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    refreshToken,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext; 
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
  otpModal: {
    isOpen: boolean;
    email: string;
    purpose: 'registration' | 'forgot_password';
  };
  openOTPModal: (email: string, purpose?: 'registration' | 'forgot_password') => void;
  closeOTPModal: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('covid_auth_token'));
  const [isLoading, setIsLoading] = useState(true);
  
  const [otpModal, setOtpModal] = useState<{
    isOpen: boolean;
    email: string;
    purpose: 'registration' | 'forgot_password';
  }>({
    isOpen: false,
    email: '',
    purpose: 'registration'
  });

  useEffect(() => {
    const fetchMe = async () => {
      const storedToken = localStorage.getItem('covid_auth_token');
      if (!storedToken) {
        setIsLoading(false);
        return;
      }
      try {
        const res = await fetch('/api/auth/me', {
          headers: { Authorization: `Bearer ${storedToken}` }
        });
        if (res.ok) {
          const userData = await res.json();
          setUser(userData);
          setToken(storedToken);
        } else {
          localStorage.removeItem('covid_auth_token');
          setToken(null);
          setUser(null);
        }
      } catch (e) {
        console.error('Failed to authenticate token session:', e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMe();
  }, []);

  const login = (newToken: string, newUser: User) => {
    localStorage.setItem('covid_auth_token', newToken);
    setToken(newToken);
    setUser(newUser);
  };

  const logout = () => {
    const storedToken = localStorage.getItem('covid_auth_token');
    if (storedToken) {
      fetch('/api/auth/logout', {
        method: 'POST',
        headers: { Authorization: `Bearer ${storedToken}` }
      }).catch(() => {});
    }
    localStorage.removeItem('covid_auth_token');
    setToken(null);
    setUser(null);
  };

  const openOTPModal = (email: string, purpose: 'registration' | 'forgot_password' = 'registration') => {
    setOtpModal({ isOpen: true, email, purpose });
  };

  const closeOTPModal = () => {
    setOtpModal(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <AuthContext.Provider value={{
      user,
      token,
      isLoading,
      login,
      logout,
      otpModal,
      openOTPModal,
      closeOTPModal
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

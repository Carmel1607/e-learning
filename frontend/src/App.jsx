import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Explore from './pages/Explore';
import CourseDetail from './pages/CourseDetail';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Register from './pages/Register';
import LogoutModal from './components/LogoutModal';

import AdminDashboard from './pages/AdminDashboard';
import CreateCourse from './pages/CreateCourse';

export default function App() {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogout = () => {
    // In a real app, clear tokens etc.
    window.location.href = '/login';
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* App Routes */}
        <Route path="/" element={<Layout onLogout={() => setIsLogoutModalOpen(true)} />}>
          <Route index element={<Dashboard />} />
          <Route path="explore" element={<Explore />} />
          <Route path="course/:id" element={<CourseDetail />} />
          <Route path="settings" element={<Settings />} />
          
          {/* Admin Routes */}
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-course" element={<CreateCourse />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <LogoutModal 
        isOpen={isLogoutModalOpen} 
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogout}
      />
    </BrowserRouter>
  );
}

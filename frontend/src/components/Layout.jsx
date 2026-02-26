import Sidebar from './Sidebar.jsx';
import Topbar from './Topbar.jsx';
import { Outlet } from 'react-router-dom';

const Layout = ({ onLogout }) => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar onLogout={onLogout} />
      <div className="flex-1 ml-64">
        <Topbar />
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;

import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';

const Layout: React.FC = () => {
  return (
    <main>
      <Navbar />
      <div className="flex px-4 pb-10 flex-1 gap-x-3">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;

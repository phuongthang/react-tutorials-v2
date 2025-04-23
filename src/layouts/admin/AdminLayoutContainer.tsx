import { Outlet } from 'react-router-dom';
import Slidebar from '../../components/Slidebar';

export default function AdminLayoutContainer() {
  return (
    <div className="flex">

      <div className="fixed top-0 left-0 h-full z-50">
        <Slidebar />
      </div>
      <div className="ml-16 flex-1">
        <Outlet />
      </div>
    </div>
  );
}
import { Outlet } from 'react-router-dom';

import { useUser } from '~/contexts/authContext';

export const Layout = () => {
  const { user } = useUser();
  return (
    <div>
      <nav>
        <span>Header</span>
        {!!user && <span> - {user.displayName}</span>}
      </nav>
      <Outlet />
    </div>
  );
};

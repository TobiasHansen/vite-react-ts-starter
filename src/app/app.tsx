import Main from '~/app/main';
import { AuthProvider } from '~/contexts/authContext';

export const App = () => {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
};

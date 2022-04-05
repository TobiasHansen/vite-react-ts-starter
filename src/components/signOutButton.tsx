import { useAuth } from '~/firebase';

export const SignOutButton = () => {
  const handleClick = () => {
    const auth = useAuth();
    auth.signOut();
  };

  return (
    <button onClick={handleClick} type="button">
      Sign Out
    </button>
  );
};

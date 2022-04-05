import { SignInButton } from '~/components/signInButton';
import { SignOutButton } from '~/components/signOutButton';
import { useAuthState } from '~/contexts/authContext';

const Index = () => {
  const { state } = useAuthState();

  return (
    <>
      <h1>Vite + React + Typescript + Firebase Auth + React Router</h1>
      <p>Project base</p>
      <div>
        {state.state === 'UNKNOWN' ? null : state.state === 'SIGNED_OUT' ? (
          <SignInButton />
        ) : (
          <SignOutButton />
        )}
      </div>
    </>
  );
};

export default Index;

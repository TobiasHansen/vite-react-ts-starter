import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

import { useAuth } from '~/firebase';

export const SignInButton = () => {
  const handleClick = () => {
    const provider = new GoogleAuthProvider();
    const auth = useAuth();
    auth.useDeviceLanguage();

    signInWithRedirect(auth, provider);
  };

  return (
    <button onClick={handleClick} type="button">
      Sign In With Google
    </button>
  );
};

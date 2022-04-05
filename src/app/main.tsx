import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { useSignIn, useSignOut } from '~/contexts/authContext';
import { setupFirebase } from '~/firebase';
import { useMountEffect } from '~/hooks/useMountEffect';
import { Router } from '~/routing/router';

function Main() {
  const { signIn } = useSignIn();
  const { signOut } = useSignOut();
  useMountEffect(() => {
    setupFirebase();

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        signIn(user);
      } else {
        signOut();
      }
    });
  });
  return (
    <main>
      <Router />
    </main>
  );
}

export default Main;

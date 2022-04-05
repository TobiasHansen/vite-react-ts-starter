import { Button, Tooltip } from '@mantine/core';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { useState } from 'react';
import { BrandGoogle, Login } from 'tabler-icons-react';

import { useAuth } from '~/firebase';

export const SignInButton = () => {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    const provider = new GoogleAuthProvider();
    const auth = useAuth();
    auth.useDeviceLanguage();

    signInWithRedirect(auth, provider);
  };

  return (
    <Tooltip opened={opened} label="Sign in with Google" withArrow>
      <Button
        onClick={handleClick}
        variant="outline"
        leftIcon={<Login />}
        rightIcon={<BrandGoogle />}
        onMouseEnter={() => setOpened(true)}
        onMouseLeave={() => setOpened(false)}
      >
        Sign in
      </Button>
    </Tooltip>
  );
};

import { ActionIcon, Button } from '@mantine/core';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { BrandGoogle, Login } from 'tabler-icons-react';

import { TooltipText } from '~/components/tooltipText';
import { useAuth } from '~/firebase';

interface Props {
  minimize?: boolean;
}

export const SignInButton = ({ minimize = false }: Props) => {
  const handleClick = () => {
    const provider = new GoogleAuthProvider();
    const auth = useAuth();
    auth.useDeviceLanguage();

    signInWithRedirect(auth, provider);
  };

  return (
    <TooltipText label="Sign in with Google">
      {minimize ? (
        <Button variant="outline" onClick={handleClick}>
          <Login />
        </Button>
      ) : (
        <Button
          onClick={handleClick}
          variant="outline"
          leftIcon={<Login />}
          rightIcon={<BrandGoogle />}
        >
          Sign in
        </Button>
      )}
    </TooltipText>
  );
};

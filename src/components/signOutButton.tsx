import { Button } from '@mantine/core';
import { Logout } from 'tabler-icons-react';

import { TooltipText } from '~/components/tooltipText';
import { useAuth } from '~/firebase';

export const SignOutButton = () => {
  const handleClick = () => {
    const auth = useAuth();
    auth.signOut();
  };

  return (
    <TooltipText label="Sign out">
      <Button onClick={handleClick} variant="subtle" size="xs">
        <Logout />
      </Button>
    </TooltipText>
  );
};

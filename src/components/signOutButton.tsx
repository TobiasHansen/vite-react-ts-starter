import { Button, Tooltip } from '@mantine/core';
import { useState } from 'react';
import { Logout } from 'tabler-icons-react';

import { useAuth } from '~/firebase';

export const SignOutButton = () => {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    const auth = useAuth();
    auth.signOut();
  };

  return (
    <Tooltip opened={opened} label="Sign out" withArrow>
      <Button
        onClick={handleClick}
        variant="subtle"
        size="xs"
        onMouseEnter={() => setOpened(true)}
        onMouseLeave={() => setOpened(false)}
      >
        <Logout />
      </Button>
    </Tooltip>
  );
};

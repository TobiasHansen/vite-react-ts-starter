import { Avatar, Group, Navbar, Text } from '@mantine/core';

import { SignInButton } from '~/components/signInButton';
import { SignOutButton } from '~/components/signOutButton';
import { useAuthState, useUser } from '~/contexts/authContext';

export const LeftNavFooter = () => {
  const { state } = useAuthState();
  const { user } = useUser();

  return (
    <Navbar.Section>
      {state.state === 'UNKNOWN' ? null : state.state === 'SIGNED_OUT' ? (
        <SignInButton />
      ) : (
        <>
          <Group>
            <Avatar size={40} color="blue">
              {user?.displayName
                ?.split(' ')
                .map((s) => s[0])
                .join('')}
            </Avatar>
            <Text>{user?.displayName ?? ''}</Text>
            <SignOutButton />
          </Group>
        </>
      )}
    </Navbar.Section>
  );
};

import { Avatar, Box, Group, Navbar, Text, useMantineTheme } from '@mantine/core';

import { SignInButton } from '~/components/signInButton';
import { SignOutButton } from '~/components/signOutButton';
import { useAuthState, useUser } from '~/contexts/authContext';

export const LeftNavFooter = () => {
  const theme = useMantineTheme();
  const { state } = useAuthState();
  const { user } = useUser();

  return (
    <Navbar.Section>
      {state.state !== 'UNKNOWN' && (
        <Box
          sx={{
            paddingTop: theme.spacing.sm,
            borderTop: `1px solid ${
              theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
            }`,
          }}
        >
          <Group position="center" spacing="xl">
            {state.state === 'SIGNED_OUT' ? (
              <SignInButton />
            ) : (
              <>
                <Avatar size={40} color="blue">
                  {user?.displayName
                    ?.split(' ')
                    .map((s) => s[0])
                    .join('')}
                </Avatar>
                <Text>{user?.displayName ?? ''}</Text>
                <SignOutButton />
              </>
            )}
          </Group>
        </Box>
      )}
    </Navbar.Section>
  );
};

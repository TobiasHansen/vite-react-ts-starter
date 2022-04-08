import { Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import { AlertCircle } from 'tabler-icons-react';

import { Route } from '~/routing/routes';

interface Props {
  route: Route;
}

export const LeftNavLink = ({ route }: Props) => {
  const isActive = useLocation().pathname === route.path;

  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        ...(isActive
          ? {
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[6]
                  : theme.colors.gray[0],
            }
          : {}),

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2],
        },
      })}
      component={Link}
      to={route.path}
    >
      <Group>
        <ThemeIcon color="teal" variant="light">
          <AlertCircle size={16} />
        </ThemeIcon>

        <Text size="sm">{route.name}</Text>
      </Group>
    </UnstyledButton>
  );
};

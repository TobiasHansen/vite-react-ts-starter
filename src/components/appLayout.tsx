import {
  ActionIcon,
  AppShell,
  Group,
  Header,
  Navbar,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { MoonStars, Sun } from 'tabler-icons-react';

import { LeftNav } from '~/components/leftNav';
import { LeftNavFooter } from '~/components/leftNavFooter';

export const AppLayout = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          <LeftNav />
          <LeftNavFooter />
        </Navbar>
      }
      header={
        <Header height={60}>
          <Group sx={{ height: '100%' }} px={20} position="apart">
            <Title>Project A</Title>
            <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
              {colorScheme === 'dark' ? <Sun size={16} /> : <MoonStars size={16} />}
            </ActionIcon>
          </Group>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      <Outlet />
    </AppShell>
  );
};

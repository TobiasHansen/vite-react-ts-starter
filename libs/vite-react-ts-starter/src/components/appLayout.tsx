import { AppShell, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { AppHeader } from '~/components/appHeader';
import { LeftNav } from '~/components/leftNav';

export const AppLayout = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={<LeftNav opened={opened} />}
      header={<AppHeader opened={opened} setOpened={setOpened} />}
    >
      <Outlet />
    </AppShell>
  );
};

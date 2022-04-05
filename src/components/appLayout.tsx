import { AppShell, Navbar } from '@mantine/core';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { LeftNav } from '~/components/leftNav';
import { LeftNavFooter } from '~/components/leftNavFooter';
import { LeftNavHeader } from '~/components/leftNavHeader';

export const AppLayout = () => {
  const [navOpen, setNavOpen] = useState(true);
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: navOpen ? 300 : 80 }} p="xs">
          <LeftNavHeader navOpen={navOpen} setNavOpen={setNavOpen} />
          <LeftNav navOpen={navOpen} />
          <LeftNavFooter navOpen={navOpen} />
        </Navbar>
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

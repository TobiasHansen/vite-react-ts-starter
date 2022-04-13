import { Navbar } from '@mantine/core';

import { LeftNavFooter } from '~/components/leftNavFooter';
import { LeftNavLink } from '~/components/leftNavLink';
import { routes } from '~/routing/routes';

interface Props {
  opened: boolean;
}

export const LeftNav = ({ opened }: Props) => {
  return (
    <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
      <Navbar.Section grow mt="xs">
        {Object.values(routes)
          .sort((a, b) => a.index - b.index)
          .map((route) => (
            <LeftNavLink key={route.name} route={route} />
          ))}
      </Navbar.Section>
      <LeftNavFooter opened={opened} />
    </Navbar>
  );
};

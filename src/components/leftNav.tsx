import { Navbar } from '@mantine/core';

import { LeftNavLink } from '~/components/leftNavLink';
import { routes } from '~/routing/routes';

interface Props {
  navOpen: boolean;
}

export const LeftNav = ({ navOpen }: Props) => {
  return (
    <Navbar.Section grow mt="xs">
      {navOpen &&
        Object.values(routes)
          .sort((a, b) => a.index - b.index)
          .map((route) => <LeftNavLink key={route.name} route={route} />)}
    </Navbar.Section>
  );
};

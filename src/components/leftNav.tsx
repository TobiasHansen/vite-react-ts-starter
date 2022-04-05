import { Navbar } from '@mantine/core';

import { LeftNavLink } from '~/components/leftNavLink';

export const LeftNav = () => {
  return (
    <Navbar.Section grow mt="xs">
      <LeftNavLink label={'Frontpage'} to={'/'} />
      <LeftNavLink label={'Page A'} to={'/page-a'} />
    </Navbar.Section>
  );
};

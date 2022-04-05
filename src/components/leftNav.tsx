import { Navbar } from '@mantine/core';

import { LeftNavLink } from '~/components/leftNavLink';

interface Props {
  navOpen: boolean;
}

export const LeftNav = ({ navOpen }: Props) => {
  return (
    <Navbar.Section grow mt="xs">
      {navOpen && (
        <>
          <LeftNavLink label={'Frontpage'} to={'/'} />
          <LeftNavLink label={'Page A'} to={'/page-a'} />
        </>
      )}
    </Navbar.Section>
  );
};

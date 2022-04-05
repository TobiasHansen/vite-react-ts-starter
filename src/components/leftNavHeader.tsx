import {
  ActionIcon,
  Box,
  Group,
  Navbar,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import {
  ArrowBigLeftLines,
  ArrowBigRightLines,
  MoonStars,
  Sun,
} from 'tabler-icons-react';

import { TooltipText } from '~/components/tooltipText';

interface Props {
  navOpen: boolean;
  setNavOpen: (navOpen: boolean) => void;
}

export const LeftNavHeader = ({ navOpen, setNavOpen }: Props) => {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Navbar.Section>
      <Box
        sx={{
          paddingBottom: theme.spacing.sm,
          borderBottom: `2px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
          }`,
        }}
      >
        {navOpen ? (
          <Group position="apart">
            <TooltipText
              label={`Toggle ${colorScheme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                {colorScheme === 'dark' ? <Sun size={16} /> : <MoonStars size={16} />}
              </ActionIcon>
            </TooltipText>
            <Title>Project A</Title>
            <ActionIcon onClick={() => setNavOpen(!navOpen)} radius="xl" variant="hover">
              <ArrowBigLeftLines size={32} strokeWidth={1.5} />
            </ActionIcon>
          </Group>
        ) : (
          <Group position="center">
            <ActionIcon onClick={() => setNavOpen(!navOpen)} radius="xl" variant="hover">
              <ArrowBigRightLines size={32} strokeWidth={1.5} />
            </ActionIcon>
          </Group>
        )}
      </Box>
    </Navbar.Section>
  );
};

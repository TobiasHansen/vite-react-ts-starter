import { Tooltip, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { ReactNode, useState } from 'react';

interface Props {
  label: string;
  children: ReactNode;
}

export const TooltipText = ({ label, children }: Props) => {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const showTooltip = useMediaQuery(`(min-width: ${theme.breakpoints.sm}px)`);
  return (
    <Tooltip
      opened={showTooltip && opened}
      label={label}
      withArrow
      onMouseEnter={() => setOpened(true)}
      onMouseLeave={() => setOpened(false)}
    >
      {children}
    </Tooltip>
  );
};

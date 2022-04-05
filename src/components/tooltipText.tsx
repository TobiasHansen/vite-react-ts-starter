import { Tooltip } from '@mantine/core';
import { ReactNode, useState } from 'react';

interface Props {
  label: string;
  children: ReactNode;
}

export const TooltipText = ({ label, children }: Props) => {
  const [opened, setOpened] = useState(false);
  return (
    <Tooltip
      opened={opened}
      label={label}
      withArrow
      onMouseEnter={() => setOpened(true)}
      onMouseLeave={() => setOpened(false)}
    >
      {children}
    </Tooltip>
  );
};

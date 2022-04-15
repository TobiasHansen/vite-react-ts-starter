import { Text, Title } from '@mantine/core';
import { Link } from 'react-router-dom';

const Page404 = () => (
  <>
    <Title>404 - Page not found.</Title>
    <Text variant="link" component={Link} to="/">
      Take me back to the homepage
    </Text>
  </>
);

export default Page404;

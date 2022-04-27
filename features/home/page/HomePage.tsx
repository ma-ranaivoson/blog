import { Box } from '@chakra-ui/react';
import Header from '../components/Header';
import HeroArea from '../components/HeroArea';

export default function HomePage() {
  return (
    <>
      <Header />
      <Box p={4}>
        <HeroArea />
      </Box>
    </>
  );
}

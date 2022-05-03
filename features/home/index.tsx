import {
  Center, Flex, Box, Stack, Heading,
} from '@chakra-ui/react';
import AboutMe from './components/AboutMe';
import MyContributions from './components/MyContributions';
import MySkills from './components/MySkills';

interface HomePageProps {
  contributions: unknown
}

// eslint-disable-next-line max-len
export default function HomePage({ contributions }: HomePageProps) {
  return (
    <Box p={4}>
      <Flex justifyContent="center" maxW="2xl" margin="auto">
        <Stack spacing={2}>
          <Heading as="h2">
            <Center>
              Hi there!!!
            </Center>
          </Heading>
          <AboutMe />
          <MySkills />
          <MyContributions contributions={contributions} />
        </Stack>
      </Flex>
    </Box>
  );
}

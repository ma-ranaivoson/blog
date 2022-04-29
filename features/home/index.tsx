import {
  Center, Flex, Box, Stack, Heading,
} from '@chakra-ui/react';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';

// eslint-disable-next-line max-len
export default function HomePage() {
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
        </Stack>
      </Flex>
    </Box>
  );
}

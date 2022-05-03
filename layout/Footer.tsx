import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ReactNode } from 'react';

function SocialButton({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW="6xl"
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>© 2022 Ma Ranaivoson</Text>
        <Stack direction="row" spacing={6}>
          <SocialButton label="GitHub">
            <Link href="https://www.github.com/ma-ranaivoson" isExternal><FaGithub /></Link>
          </SocialButton>
          <SocialButton label="YouTube">
            <Link href="https://www.linkedin.com/in/ma-ranaivoson-82bb6318a/" isExternal><FaLinkedin /></Link>
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}

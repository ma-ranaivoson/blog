import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Heading,
  Collapse,
} from '@chakra-ui/react';
import {
  HamburgerIcon, CloseIcon, MoonIcon, SunIcon,
} from '@chakra-ui/icons';
import style from '../styles/Headers.module.css';

const Links = ['Home', 'Blog'];

function NavLink({ children }: { children: ReactNode }) {
  return (
    <Link
      px={2}
      py={1}
      rounded="md"
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href="/"
    >
      {children}
    </Link>
  );
}

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex
        maxW="2xl"
        h={16}
        alignItems="center"
        justifyContent="space-between"
        margin="auto"
      >
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Box>
            <Link className={style.linkReset} href="/">
              <Heading size="sm" cursor="pointer">
                {'<'}
                Ma
                {' '}
                <div className={style.emoji} data-hover="👋" />
                😎/
                {'>'}
              </Heading>
            </Link>
          </Box>
        </HStack>
        <Flex alignItems="center">
          <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Collapse>
    </Box>
  );
}
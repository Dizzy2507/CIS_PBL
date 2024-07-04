// src/components/Header.js
import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  useColorModeValue,
  Button,
  VStack,
  useColorMode,
  Text
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';

const Links = [
  { name: 'Home', to: '/' },
  { name: 'Phishing', to: '/phishing' },
  { name: 'Password Management', to: '/password-management' },
  { name: 'Privacy Settings', to: '/privacy-settings' },
  { name: 'Safe Browsing', to: '/safe-browsing' },
];

const NavLink = ({ to, children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('teal.300', 'teal.700'),
      color: useColorModeValue('white', 'white')
    }}
    href={to}
  >
    {children}
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue('teal.500', 'teal.900')} px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
            <Box color="white" fontWeight="bold" fontSize="xl">Cybersecurity Knowledge</Box>
            <HStack
              as="nav"
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link.name} to={link.to}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems="center">
            <Button onClick={toggleColorMode} variant="ghost">
              {colorMode === 'light' ? <MoonIcon color="white" /> : <SunIcon color="white" />}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <VStack as="nav" spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} to={link.to}>
                  {link.name}
                </NavLink>
              ))}
            </VStack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Header;

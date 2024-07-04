// src/pages/PasswordManagement.js
import React from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  Flex,
  Icon,
  Button,
  Link,
  useColorModeValue,
  VStack,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { FaKey, FaCheckCircle, FaLightbulb, FaShieldAlt, FaQuestionCircle } from 'react-icons/fa';

const PasswordManagement = () => {
  return (
    <Box p={5} bg={useColorModeValue('gray.50', 'gray.800')} minH="100vh">
      <Flex direction="column" align="center" mb={10}>
        <Heading as="h1" size="2xl" mb={4} color={useColorModeValue('teal.600', 'teal.300')}>
          Password Management
        </Heading>
        <Text fontSize="xl" mb={6} textAlign="center" maxW="800px">
          Learn how to create strong passwords and manage them effectively to protect your online accounts. 
          Follow our detailed tips and guidelines to enhance your security.
        </Text>
        
      </Flex>

      <VStack spacing={8} align="start">
        <Box
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          bg={useColorModeValue('white', 'gray.700')}
          w="full"
        >
          <Flex align="center" mb={4}>
            <Icon as={FaKey} w={8} h={8} color="teal.500" />
            <Heading as="h2" size="md" ml={2}>
              Create Strong Passwords
            </Heading>
          </Flex>
          <Text mb={4}>
            A strong password is the first line of defense against unauthorized access. Here are some tips for creating strong passwords:
          </Text>
          <List spacing={3} mb={4}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="teal.500" />
              Make it at least 12 characters long.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="teal.500" />
              Include a mix of uppercase and lowercase letters, numbers, and special characters.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="teal.500" />
              Avoid using easily guessable information like birthdays, names, or common words.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="teal.500" />
              Use passphrases made up of multiple words that are not related.
            </ListItem>
          </List>
          <Text mb={4}>
            Example of a strong password: <strong>@c0mpl3xP@ssphr@se!</strong>
          </Text>
        </Box>

        <Box
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          bg={useColorModeValue('white', 'gray.700')}
          w="full"
        >
          <Flex align="center" mb={4}>
            <Icon as={FaCheckCircle} w={8} h={8} color="teal.500" />
            <Heading as="h2" size="md" ml={2}>
              Use Password Managers
            </Heading>
          </Flex>
          <Text mb={4}>
            Password managers are tools that help you generate, store, and manage your passwords securely. Here are some benefits and popular options:
          </Text>
          <List spacing={3} mb={4}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="teal.500" />
              Generate complex passwords that are hard to crack.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="teal.500" />
              Store all your passwords securely in one place.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="teal.500" />
              Automatically fill in passwords on websites and apps.
            </ListItem>
          </List>
          <Text mb={4}>
            Popular password managers include <Link href="https://www.lastpass.com/" isExternal color="teal.500">LastPass</Link>, 
            <Link href="https://1password.com/" isExternal color="teal.500">1Password</Link>, and 
            <Link href="https://bitwarden.com/" isExternal color="teal.500">Bitwarden</Link>.
          </Text>
        </Box>

        <Box
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          bg={useColorModeValue('white', 'gray.700')}
          w="full"
        >
          <Flex align="center" mb={4}>
            <Icon as={FaLightbulb} w={8} h={8} color="teal.500" />
            <Heading as="h2" size="md" ml={2}>
              Enable Two-Factor Authentication
            </Heading>
          </Flex>
          <Text mb={4}>
            Two-factor authentication (2FA) adds an extra layer of security to your accounts. Here’s how it works and why you should use it:
          </Text>
          <List spacing={3} mb={4}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="teal.500" />
              After entering your password, you’ll be required to enter a second form of verification.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="teal.500" />
              This second factor could be a code sent to your phone, an app-generated code, or a biometric verification like a fingerprint.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="teal.500" />
              Even if someone gets your password, they’ll need the second factor to access your account.
            </ListItem>
          </List>
          <Text mb={4}>
            Enable 2FA on your accounts wherever possible, especially for email, banking, and social media.
          </Text>
        </Box>

        <Box
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          bg={useColorModeValue('white', 'gray.700')}
          w="full"
        >
          <Flex align="center" mb={4}>
            <Icon as={FaShieldAlt} w={8} h={8} color="teal.500" />
            <Heading as="h2" size="md" ml={2}>
              Regularly Update Passwords
            </Heading>
          </Flex>
          <Text mb={4}>
            Keeping your passwords updated is crucial for maintaining security. Here are some tips on when and how to update your passwords:
          </Text>
          <List spacing={3} mb={4}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="teal.500" />
              Change your passwords periodically, such as every 3-6 months.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="teal.500" />
              Immediately update your passwords if you suspect any account has been compromised.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="teal.500" />
              Avoid reusing passwords across different sites.
            </ListItem>
          </List>
          <Text mb={4}>
            Using a password manager can make it easier to keep track of your updated passwords.
          </Text>
        </Box>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
          <Link href="/password-management-quiz">
            <Button colorScheme="teal" size="lg">
              Take a Quiz
            </Button>
          </Link>
        </Stack>
      </VStack>
    </Box>
  );
};

export default PasswordManagement;

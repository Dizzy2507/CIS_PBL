// src/pages/Home.js
import React from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Link,
  Button,
  useColorModeValue,
  Image,
  Stack,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { FaLaptop, FaLock, FaUserShield, FaShieldAlt, FaBook, FaQuestionCircle } from 'react-icons/fa';

const Home = () => {
  return (
    <Box p={5} bg={useColorModeValue('gray.50', 'gray.800')} minH="100vh">
      <Flex direction="column" align="center" mb={10}>
        <Heading as="h1" size="2xl" mb={4} color={useColorModeValue('teal.600', 'teal.300')}>
          Welcome to Cybersecurity Knowledge
        </Heading>
        <Text fontSize="xl" mb={6} textAlign="center" maxW="600px">
          Learn how to protect yourself online with our easy-to-follow guides and quizzes.
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
          <Link href="/intro">
            <Button colorScheme="teal" size="lg" leftIcon={<FaBook />}>
              Start Learning
            </Button>
          </Link>
          <Link href="/quiz">
            <Button colorScheme="teal" variant="outline" size="lg" leftIcon={<FaQuestionCircle />}>
              Take a Quiz
            </Button>
          </Link>
        </Stack>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          _hover={{ shadow: 'lg', bg: useColorModeValue('gray.100', 'gray.700') }}
          bg={useColorModeValue('white', 'gray.700')}
        >
          <Flex align="center" mb={4}>
            <Icon as={FaLaptop} w={8} h={8} color="teal.500" />
            <Heading as="h2" size="md" ml={2}>
              Phishing & Scams
            </Heading>
          </Flex>
          <Text mb={4}>
            Learn how to recognize and avoid phishing scams.
          </Text>
          <Link href="/phishing">
            <Button colorScheme="teal">Learn More</Button>
          </Link>
        </Box>

        <Box
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          _hover={{ shadow: 'lg', bg: useColorModeValue('gray.100', 'gray.700') }}
          bg={useColorModeValue('white', 'gray.700')}
        >
          <Flex align="center" mb={4}>
            <Icon as={FaLock} w={8} h={8} color="teal.500" />
            <Heading as="h2" size="md" ml={2}>
              Password Management
            </Heading>
          </Flex>
          <Text mb={4}>
            Tips for creating and managing strong passwords.
          </Text>
          <Link href="/password-management">
            <Button colorScheme="teal">Learn More</Button>
          </Link>
        </Box>

        <Box
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          _hover={{ shadow: 'lg', bg: useColorModeValue('gray.100', 'gray.700') }}
          bg={useColorModeValue('white', 'gray.700')}
        >
          <Flex align="center" mb={4}>
            <Icon as={FaUserShield} w={8} h={8} color="teal.500" />
            <Heading as="h2" size="md" ml={2}>
              Privacy Settings
            </Heading>
          </Flex>
          <Text mb={4}>
            How to adjust privacy settings to protect your information.
          </Text>
          <Link href="/privacy-settings">
            <Button colorScheme="teal">Learn More</Button>
          </Link>
        </Box>

        <Box
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          _hover={{ shadow: 'lg', bg: useColorModeValue('gray.100', 'gray.700') }}
          bg={useColorModeValue('white', 'gray.700')}
        >
          <Flex align="center" mb={4}>
            <Icon as={FaShieldAlt} w={8} h={8} color="teal.500" />
            <Heading as="h2" size="md" ml={2}>
              Safe Browsing
            </Heading>
          </Flex>
          <Text mb={4}>
            Tips for staying safe while browsing the internet.
          </Text>
          <Link href="/safe-browsing">
            <Button colorScheme="teal">Learn More</Button>
          </Link>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Home;

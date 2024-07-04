import React from 'react';
import { Box, Heading, Text, VStack, Button, Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const IntroductionPage = () => {
  return (
    <Box p={4} maxW="800px" mx="auto">
      <VStack spacing={6} align="start">
        <Heading as="h1" size="2xl" color="teal.500">
          Welcome to Cybersecurity Education
        </Heading>
        <Text fontSize="lg">
          Cybersecurity is crucial for safeguarding your digital information and privacy. In today's interconnected world, understanding cybersecurity principles is essential for everyone, from individuals to businesses.
        </Text>

        <Text fontSize="lg">
          Explore the following sections to enhance your cybersecurity knowledge and practices:
        </Text>

        <VStack align="start" spacing={4}>
          <Box w="100%">
            <Heading as="h2" size="lg" color="teal.500">
              1. Safe Browsing
            </Heading>
            <Text>
              Learn about secure browsing habits, including the importance of HTTPS, recognizing phishing attempts, and using ad blockers effectively.
            </Text>
            <ChakraLink as={RouterLink} to="/safe-browsing" color="teal.500">
              Explore Safe Browsing →
            </ChakraLink>
          </Box>

          <Box w="100%">
            <Heading as="h2" size="lg" color="teal.500">
              2. Privacy Settings
            </Heading>
            <Text>
              Manage your online privacy settings across different platforms and devices. Understand how to adjust privacy settings on social media, browsers, and mobile apps.
            </Text>
            <ChakraLink as={RouterLink} to="/privacy-settings" color="teal.500">
              Explore Privacy Settings →
            </ChakraLink>
          </Box>

          <Box w="100%">
            <Heading as="h2" size="lg" color="teal.500">
              3. Phishing & Scams
            </Heading>
            <Text>
              Recognize common phishing tactics and scams. Learn how to spot suspicious emails, fake websites, and other online threats.
            </Text>
            <ChakraLink as={RouterLink} to="/phishing" color="teal.500">
              Explore Phishing & Scams →
            </ChakraLink>
          </Box>

          <Box w="100%">
            <Heading as="h2" size="lg" color="teal.500">
              4. Password Management
            </Heading>
            <Text>
              Securely manage your passwords using best practices. Discover the importance of strong, unique passwords and how to use password managers effectively.
            </Text>
            <ChakraLink as={RouterLink} to="/password-management" color="teal.500">
              Explore Password Management →
            </ChakraLink>
          </Box>

          <Box w="100%">
            <Heading as="h2" size="lg" color="teal.500">
              5. Cybersecurity Quizzes
            </Heading>
            <Text>
              Test your knowledge with interactive quizzes on various cybersecurity topics. Challenge yourself and track your progress.
            </Text>
            <ChakraLink as={RouterLink} to="/quiz" color="teal.500">
              Take Cybersecurity Quizzes →
            </ChakraLink>
          </Box>

         
        </VStack>

        <Button as={RouterLink} to="/" colorScheme="teal" size="lg" w="100%">
          Back to Home
        </Button>
      </VStack>
    </Box>
  );
};

export default IntroductionPage;

import React from 'react';
import { Box, Heading, Text, VStack, Image, Link, Button, Icon } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { MdSecurity, MdBlock, MdWarning, MdLock, MdLockOutline } from 'react-icons/md';

const SafeBrowsing = () => {
  return (
    <Box p={4} maxW="800px" mx="auto">
      <VStack spacing={6} align="start">
        <Heading as="h1" size="2xl" color="teal.500" fontFamily="Montserrat, sans-serif">
          Safe Browser
        </Heading>
        <Text fontSize="lg" fontFamily="Inter, sans-serif">
          Welcome to the Safe Browser! This browser is designed with your security and privacy in mind.
        </Text>

        <Image
          src="https://example.com/safe-browser-image.jpg"
          alt="Safe Browser"
          borderRadius="md"
          shadow="md"
          maxW="100%"
        />

        <Text fontSize="lg" fontFamily="Inter, sans-serif">
          The Safe Browser helps protect your online activities and data. Here are some key features:
        </Text>

        <VStack align="start" spacing={3}>
          <Text>
            <Icon as={MdSecurity} color="teal.500" boxSize={6} mr={2} />
            Secure Connection: Ensures that your browsing sessions are encrypted and secure.
          </Text>
          <Text>
            <Icon as={MdBlock} color="teal.500" boxSize={6} mr={2} />
            Ad Blocker: Blocks intrusive ads and trackers to enhance your browsing experience and privacy.
          </Text>
          <Text>
            <Icon as={MdWarning} color="teal.500" boxSize={6} mr={2} />
            Phishing Protection: Alerts you when visiting potentially malicious websites to prevent phishing attacks.
          </Text>
          <Text>
            <Icon as={MdLock} color="teal.500" boxSize={6} mr={2} />
            Privacy Mode: Allows you to browse without saving cookies, history, or tracking your activities.
          </Text>
          <Text>
            <Icon as={MdLockOutline} color="teal.500" boxSize={6} mr={2} />
            Password Manager Integration: Securely store and manage your passwords for different websites.
          </Text>
        </VStack>

        <Box pt={4}>
          <Button as={RouterLink} to="/safe-b-quiz" colorScheme="teal" size="lg">
            Start Quiz
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default SafeBrowsing;

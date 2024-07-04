import React from 'react';
import { Box, Heading, Text, VStack, List, ListItem, ListIcon, Image, Button, Link,useColorModeValue } from '@chakra-ui/react';
import { CheckCircleIcon, LockIcon, InfoIcon, ViewIcon, SettingsIcon, WarningIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const PrivacySettings = () => {
  return (
    <Box p={4} maxW="800px" mx="auto">
      <VStack spacing={6} align="start">
        <Heading as="h1" size="2xl" color="teal.500">
          Privacy Settings
        </Heading>
        <Text fontSize="lg">
          Managing your privacy settings is crucial for protecting your personal information online. Here are some tips and best practices to help you stay secure.
        </Text>

      

        <Box
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          bg={useColorModeValue('white', 'gray.700')}
          w="full"
        >

        <Heading as="h2" size="lg" color="teal.400" pt={4}>
          Why Privacy Settings Matter
        </Heading>
        <List spacing={3} fontSize="lg">
          <ListItem>
            <ListIcon as={InfoIcon} color="blue.500" />
            Control Over Personal Data: Privacy settings help you control who can see and access your personal information.
          </ListItem>
          <ListItem>
            <ListIcon as={LockIcon} color="blue.500" />
            Enhanced Security: By customizing your privacy settings, you can enhance the security of your online accounts.
          </ListItem>
          <ListItem>
            <ListIcon as={ViewIcon} color="blue.500" />
            Reduced Risk of Identity Theft: Proper privacy settings reduce the risk of identity theft and other cybercrimes.
          </ListItem>
          <ListItem>
            <ListIcon as={SettingsIcon} color="blue.500" />
            Improved Online Experience: Personalized privacy settings can improve your online experience by minimizing unwanted content and interactions.
          </ListItem>
        </List>
        </Box>
        <Box
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          bg={useColorModeValue('white', 'gray.700')}
          w="full"
        >
        <Heading as="h2" size="lg" color="teal.400" pt={4}>
          Key Privacy Settings to Review
        </Heading>
        <List spacing={3} fontSize="lg">
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Account Privacy: Ensure your social media accounts are set to private, so only approved followers can see your posts. Regularly review privacy settings on all accounts.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Location Services: Limit location sharing to only necessary applications, and disable it for social media platforms. Use geo-tagging sparingly.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            App Permissions: Regularly review the permissions granted to apps on your devices, and revoke those that are unnecessary. Be cautious with apps that request access to your contacts, camera, or microphone.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Ad Preferences: Adjust ad settings on platforms like Google and Facebook to limit personalized advertising. Opt-out of interest-based ads where possible.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Data Sharing: Be cautious about which third-party services you allow to access your data. Review privacy policies and opt-out of data sharing where available.
          </ListItem>
        </List>
        </Box>
        <Box
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          bg={useColorModeValue('white', 'gray.700')}
          w="full"
        >

        <Heading as="h2" size="lg" color="teal.400" pt={4}>
          Tips for Managing Privacy Settings
        </Heading>
        <List spacing={3} fontSize="lg">
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Review Default Settings: Always review and customize the default privacy settings on any new online service or app.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Limit Data Sharing: Only share personal data that is necessary. Avoid oversharing on social media and other platforms. Consider using a separate email address for online shopping and newsletters.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Use Strong Passwords: Combine privacy settings with strong, unique passwords for added security. Use a password manager to securely store and generate passwords.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Enable Two-Factor Authentication (2FA): Adding an extra layer of security helps protect your accounts even if your password is compromised. Use 2FA wherever possible.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Be Wary of Public Wi-Fi: Avoid accessing sensitive information on public Wi-Fi networks, or use a VPN for secure browsing. Disable automatic Wi-Fi connections on your devices.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Regularly Update Software: Keep your operating system and apps up to date to protect against security vulnerabilities. Enable automatic updates where available.
          </ListItem>
        </List>
        </Box>

        <Box pt={4}>
          <Button as={RouterLink} to="/privacy-quiz" colorScheme="teal" size="lg">
            Take the Privacy Settings Quiz
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default PrivacySettings;

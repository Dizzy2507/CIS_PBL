import React from 'react';
import { Box, Heading, Text, VStack, List, ListItem, ListIcon, Image, Button, Link,useColorModeValue } from '@chakra-ui/react';
import { CheckCircleIcon, WarningIcon, EmailIcon, LinkIcon, AttachmentIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const Phishing = () => {
  return (
    <Box p={4} maxW="800px" mx="auto">
      <VStack spacing={6} align="start">
        <Heading as="h1" size="2xl" color="teal.500">
          Phishing & Scams
        </Heading>
        <Text fontSize="lg">
          Phishing is a type of online scam where attackers pretend to be a legitimate entity to steal your personal information. It often involves deceptive emails, websites, or messages.
        </Text>
        
     
        
        <Heading as="h2" size="lg" color="teal.400" pt={4}>
          How to Recognize Phishing
        </Heading>
        <List spacing={3} fontSize="lg">
          <ListItem>
            <ListIcon as={EmailIcon} color="red.500" />
            Suspicious Emails: Look out for emails that urge you to take immediate action, have poor grammar, or ask for sensitive information.
          </ListItem>
          <ListItem>
            <ListIcon as={LinkIcon} color="red.500" />
            Unusual URLs: Check the website URL carefully. Phishing websites often use URLs that look similar to legitimate sites but with slight variations.
          </ListItem>
          <ListItem>
            <ListIcon as={AttachmentIcon} color="red.500" />
            Unexpected Attachments: Be wary of unexpected email attachments or links, especially from unknown senders.
          </ListItem>
        </List>
        <Box
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          bg={useColorModeValue('white', 'gray.700')}
          w="full"
        >
        <Heading as="h2" size="lg" color="teal.400" pt={4}>
          Tips to Protect Yourself
        </Heading>
        <List spacing={3} fontSize="lg">
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Verify the Sender: Always verify the sender's email address before clicking on any links or providing information.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Use Security Software: Install and update antivirus and anti-malware software regularly.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Enable Two-Factor Authentication (2FA): Adding an extra layer of security helps protect your accounts even if your password is compromised.
          </ListItem>
        </List>
        </Box>
        
        <Box pt={4}>
          <Button as={RouterLink} to="/phishing-quiz" colorScheme="teal" size="lg">
            Take the Phishing Quiz
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Phishing;

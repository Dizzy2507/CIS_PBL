import React, { useState } from 'react';

import {
    Box,
    Heading,
    Text,
    Stack,
    Button,
    useColorModeValue,
    Radio,
    RadioGroup,
    VStack,
    Flex,
  } from '@chakra-ui/react';

  const questions = [
    {
      question: "1. What is phishing?",
      options: [
        "A fishing technique",
        "Sending spam emails",
        "A fraudulent attempt to obtain sensitive information",
        "A type of malware"
      ],
      answer: "A fraudulent attempt to obtain sensitive information"
    },
    {
      question: "2. What does a firewall do?",
      options: [
        "Blocks unauthorized access to a network",
        "Speeds up internet connections",
        "Scans for viruses",
        "Manages email accounts"
      ],
      answer: "Blocks unauthorized access to a network"
    },
    {
      question: "3. Why is it important to use strong, unique passwords for each online account?",
      options: [
        "To impress friends",
        "To prevent account lockouts",
        "To comply with internet regulations",
        "To enhance security and prevent unauthorized access"
      ],
      answer: "To enhance security and prevent unauthorized access"
    },
    {
      question: "4. What is malware?",
      options: [
        "A type of social media platform",
        "A computer virus",
        "A programming language",
        "A type of internet browser"
      ],
      answer: "A computer virus"
    },
    {
      question: "5. What is the purpose of encryption?",
      options: [
        "To increase internet speed",
        "To protect data by converting it into a code",
        "To delete files permanently",
        "To track user activity online"
      ],
      answer: "To protect data by converting it into a code"
    },
    {
      question: "6. How can you identify a secure website?",
      options: [
        "It has a catchy domain name",
        "It uses HTTP instead of HTTPS",
        "It displays a padlock icon in the address bar",
        "It has a lot of advertisements"
      ],
      answer: "It displays a padlock icon in the address bar"
    },
    {
      question: "7. What is a VPN (Virtual Private Network) used for?",
      options: [
        "To share files on social media",
        "To create a private network connection over a public network",
        "To store passwords securely",
        "To enhance video streaming quality"
      ],
      answer: "To create a private network connection over a public network"
    },
    {
      question: "8. What is two-factor authentication (2FA)?",
      options: [
        "A type of malware",
        "A method of confirming users' identities",
        "A software for tracking internet usage",
        "A social media platform"
      ],
      answer: "A method of confirming users' identities"
    },
    {
      question: "9. Why should you be cautious about clicking on links or attachments in emails from unknown sources?",
      options: [
        "To avoid spam emails",
        "To increase email storage capacity",
        "To prevent accidental deletion of emails",
        "To avoid phishing scams and malware infections"
      ],
      answer: "To avoid phishing scams and malware infections"
    },
    {
      question: "10. What should you do if you suspect your computer is infected with malware?",
      options: [
        "Ignore the issue and continue using the computer",
        "Install more applications to speed up the computer",
        "Use antivirus software to scan and remove the malware",
        "Reset the computer to factory settings"
      ],
      answer: "Use antivirus software to scan and remove the malware"
    },
    {
      question: "11. How often should you update your software and applications?",
      options: [
        "Once a year",
        "Only when you notice issues with the software",
        "Whenever you have spare time",
        "Regularly and as soon as updates become available"
      ],
      answer: "Regularly and as soon as updates become available"
    },
    {
      question: "12. What does social engineering involve?",
      options: [
        "Building social networks online",
        "Using social media for marketing",
        "Manipulating people into divulging confidential information",
        "Improving social skills"
      ],
      answer: "Manipulating people into divulging confidential information"
    },
    {
      question: "13. Why is it important to back up your data regularly?",
      options: [
        "To save internet bandwidth",
        "To create additional storage space",
        "To comply with legal regulations",
        "To protect against data loss from hardware failure or malware"
      ],
      answer: "To protect against data loss from hardware failure or malware"
    },
    {
      question: "14. How can you securely dispose of old electronic devices?",
      options: [
        "Throw them in the trash",
        "Donate them to charity",
        "Sell them online",
        "Use a reputable recycling service that specializes in electronic waste"
      ],
      answer: "Use a reputable recycling service that specializes in electronic waste"
    },
    {
      question: "15. What is the best practice for securing a home Wi-Fi network?",
      options: [
        "Keep the network name (SSID) hidden",
        "Share the password with neighbors",
        "Disable encryption for faster speeds",
        "Use strong encryption (WPA2 or WPA3) and a strong password"
      ],
      answer: "Use strong encryption (WPA2 or WPA3) and a strong password"
    },
    {
      question: "16. What is the role of a cybersecurity policy in an organization?",
      options: [
        "To restrict internet access for employees",
        "To enforce compliance with company rules",
        "To promote social media use",
        "To outline guidelines and procedures for protecting information assets"
      ],
      answer: "To outline guidelines and procedures for protecting information assets"
    },
    {
      question: "17. How can you verify the authenticity of a website's SSL certificate?",
      options: [
        "Check for the padlock icon in the address bar",
        "Contact the website's customer support",
        "Look for a verified badge on the website",
        "Check the certificate details in the browser settings"
      ],
      answer: "Check the certificate details in the browser settings"
    },
    {
      question: "18. Why is it important to educate employees about cybersecurity?",
      options: [
        "To increase social media engagement",
        "To reduce productivity",
        "To prevent data breaches and insider threats",
        "To limit access to company resources"
      ],
      answer: "To prevent data breaches and insider threats"
    },
    {
      question: "19. What is the purpose of penetration testing?",
      options: [
        "To hack into competitors' systems",
        "To validate the effectiveness of cybersecurity defenses",
        "To share sensitive information online",
        "To increase website traffic"
      ],
      answer: "To validate the effectiveness of cybersecurity defenses"
    },
    {
      question: "20. How does endpoint security protect devices?",
      options: [
        "By preventing access to social media platforms",
        "By monitoring network traffic",
        "By securing individual devices (endpoints) from potential threats",
        "By deleting sensitive files"
      ],
      answer: "By securing individual devices (endpoints) from potential threats"
    }
  ];
  

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
  
    const handleAnswerOptionClick = (option) => {
      if (option === questions[currentQuestion].answer) {
        setScore(score + 1);
      }
  
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOption('');
      } else {
        setShowScore(true);
      }
    };
  
    return (
      <Box p={5} bg={useColorModeValue('gray.50', 'gray.800')} minH="100vh">
        <Flex direction="column" align="center" mb={10}>
          <Heading as="h1" size="2xl" mb={4} color={useColorModeValue('teal.600', 'teal.300')}>
            General Cybersecurity Quiz
          </Heading>
          <Text fontSize="xl" mb={6} textAlign="center" maxW="600px">
            Test your knowledge on Overall Cyber Security by answering the following questions.
          </Text>
        </Flex>
  
        <Box
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          bg={useColorModeValue('white', 'gray.700')}
          w="full"
          maxW="600px"
          mx="auto"
        >
          {showScore ? (
            <Box textAlign="center">
              <Heading as="h2" size="xl" mb={4}>
                Your Score: {score} / {questions.length}
              </Heading>
              <Button colorScheme="teal" onClick={() => window.location.reload()}>
                Retake Quiz
              </Button>
            </Box>
          ) : (
            <Box>
              <Heading as="h2" size="lg" mb={4}>
                {questions[currentQuestion].question}
              </Heading>
              <RadioGroup onChange={setSelectedOption} value={selectedOption}>
                <VStack spacing={4} align="start">
                  {questions[currentQuestion].options.map((option, index) => (
                    <Radio key={index} value={option} colorScheme="teal">
                      {option}
                    </Radio>
                  ))}
                </VStack>
              </RadioGroup>
              <Button
                mt={4}
                colorScheme="teal"
                onClick={() => handleAnswerOptionClick(selectedOption)}
                isDisabled={!selectedOption}
              >
                Next
              </Button>
            </Box>
          )}
        </Box>
      </Box>
  );
};

export default Quiz;

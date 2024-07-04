// src/pages/PasswordManagementQuizPage.js
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
      question: "What does enabling Two-Factor Authentication (2FA) help protect against?",
      options: [
        "Phishing attacks",
        "Identity theft",
        "Password guessing",
        "Unauthorized access"
      ],
      answer: "Unauthorized access"
    },
    {
      question: "What should you do to limit data sharing on social media platforms?",
      options: [
        "Set all posts to public",
        "Share only with friends and family",
        "Share location with all apps",
        "Accept all friend requests"
      ],
      answer: "Share only with friends and family"
    },
    {
      question: "Why is it important to review app permissions regularly?",
      options: [
        "To increase app performance",
        "To reduce app storage",
        "To prevent data breaches",
        "To save battery life"
      ],
      answer: "To prevent data breaches"
    },
    {
      question: "How can you improve your online experience with privacy settings?",
      options: [
        "Share all personal information",
        "Block all incoming emails",
        "Minimize unwanted content and interactions",
        "Disable all notifications"
      ],
      answer: "Minimize unwanted content and interactions"
    },
    {
      question: "What should you consider before using public Wi-Fi networks?",
      options: [
        "Nothing, it's always safe",
        "Use VPN for secure browsing",
        "Share personal data freely",
        "Save passwords on the browser"
      ],
      answer: "Use VPN for secure browsing"
    }
  ];

const PrivacyQuiz = () => {
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
          Privacy Quiz
        </Heading>
        <Text fontSize="xl" mb={6} textAlign="center" maxW="600px">
          Test your knowledge on privacy knowledge by answering the following questions.
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

export default PrivacyQuiz;

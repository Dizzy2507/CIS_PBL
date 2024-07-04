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
    question: "What is the recommended minimum length for a strong password?",
    options: [
      "8 characters",
      "10 characters",
      "12 characters",
      "16 characters",
    ],
    answer: "12 characters",
  },
  {
    question: "Which of the following is a good example of a strong password?",
    options: [
      "password123",
      "JohnDoe1990",
      "My$ecureP@ssw0rd!",
      "12345678",
    ],
    answer: "My$ecureP@ssw0rd!",
  },
  {
    question: "What should you avoid using in your passwords?",
    options: [
      "Special characters",
      "Personal information",
      "A mix of letters and numbers",
      "Uppercase and lowercase letters",
    ],
    answer: "Personal information",
  },
  {
    question: "What is the primary benefit of using a password manager?",
    options: [
      "It can remember all your passwords for you",
      "It makes your passwords visible to hackers",
      "It weakens your passwords",
      "It automatically logs you out of websites",
    ],
    answer: "It can remember all your passwords for you",
  },
  {
    question: "What does enabling two-factor authentication (2FA) add to your account security?",
    options: [
      "A backup password",
      "A second form of verification",
      "Nothing",
      "An easier way to log in",
    ],
    answer: "A second form of verification",
  },
];

const PasswordManagementQuiz = () => {
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
          Password Management Quiz
        </Heading>
        <Text fontSize="xl" mb={6} textAlign="center" maxW="600px">
          Test your knowledge on password management by answering the following questions.
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

export default PasswordManagementQuiz;

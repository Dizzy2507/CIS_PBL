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
    question: "What is phishing?",
    options: [
      "A type of online scam",
      "A method of fishing in a river",
      "A technique to catch fish",
      "A new social media trend"
    ],
    answer: "A type of online scam"
  },
  {
    question: "Which of these is a sign of a phishing email?",
    options: [
      "Urgent call to action",
      "Personalized greeting",
      "Correct grammar and spelling",
      "A familiar sender"
    ],
    answer: "Urgent call to action"
  },
  {
    question: "What should you do if you receive a suspicious email?",
    options: [
      "Click the link to see what happens",
      "Forward it to your friends",
      "Delete it immediately",
      "Verify the sender and content before taking any action"
    ],
    answer: "Verify the sender and content before taking any action"
  },
  {
    question: "Which of these practices can help protect against phishing?",
    options: [
      "Using the same password for all accounts",
      "Sharing your passwords with friends",
      "Enabling two-factor authentication",
      "Ignoring software updates"
    ],
    answer: "Enabling two-factor authentication"
  },
  {
    question: "What is a common characteristic of phishing URLs?",
    options: [
      "They are short and easy to remember",
      "They contain slight misspellings of legitimate websites",
      "They are always encrypted",
      "They have the same domain as the legitimate site"
    ],
    answer: "They contain slight misspellings of legitimate websites"
  }
];

const PhishingQuiz = () => {
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
            Phishing Quiz
          </Heading>
          <Text fontSize="xl" mb={6} textAlign="center" maxW="600px">
            Test your knowledge on Phishing by answering the following questions.
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

export default PhishingQuiz;

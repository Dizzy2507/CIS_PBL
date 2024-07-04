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
      question: " What feature of the Safe Browser ensures that your browsing sessions are encrypted and secure?",
      options: [
        "Ad Blocker",
        "Phishing Protection",
        "Secure Connection",
        "Privacy Mode"
      ],
      answer: "Secure Connection"
    },
    {
      question: " Which feature of the Safe Browser blocks intrusive ads and trackers?",
      options: [
        "Ad Blocker",
        "Phishing Protection",
        "Secure Connection",
        "Privacy Mode"
      ],
      answer: "Ad Blocker"
    },
    {
      question: " What does the Safe Browser use to alert you when visiting potentially malicious websites?",
      options: [
        "Ad Blocker",
        "Phishing Protection",
        "Secure Connection",
        "Privacy Mode"
      ],
      answer: "Phishing Protection"
    },
    {
      question: " Which feature of the Safe Browser allows you to browse without saving cookies, history, or tracking your activities?",
      options: [
        "Ad Blocker",
        "Phishing Protection",
        "Secure Connection",
        "Privacy Mode"
      ],
      answer: "Privacy Mode"
    },
    {
      question: " How does the Safe Browser help you securely manage your passwords for different websites?",
      options: [
        "Ad Blocker",
        "Phishing Protection",
        "Secure Connection",
        "Password Manager Integration"
      ],
      answer: "Password Manager Integration"
    }
  ];
  

const SafeBQuiz = () => {
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
            SafeBrowsing Quiz
          </Heading>
          <Text fontSize="xl" mb={6} textAlign="center" maxW="600px">
            Test your knowledge on Safe Browsing by answering the following questions.
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

export default SafeBQuiz;

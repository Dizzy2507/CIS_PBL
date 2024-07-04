import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Home from './pages/Home';
import PasswordManagement from './pages/PasswordManagement';
import PasswordManagementQuiz from './components/PasswordManagementQuiz';
import PrivacySettings from './pages/PrivacySettings';
import Phishing from './pages/Phishing';
import PhishingQuiz from './components/PhishingQuiz';
import PrivacyQuiz from './components/PrivacyQuiz';
import SafeBQuiz from './components/SafeBQuiz';
import SafeBrowsing from './pages/SafeBrowsing';
import Quiz from './components/Quizz';
import IntroductionPage from './pages/IntroductionPage';
const App = () => {
  return (
    <ChakraProvider>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/phishing" component={Phishing} />
        <Route path="/password-management" component={PasswordManagement} />
        <Route path="/password-management-quiz" component={PasswordManagementQuiz} />
        <Route path="/privacy-settings" component={PrivacySettings} />
        <Route path="/phishing" component={Phishing}/>
        <Route path="/phishing-quiz" component={PhishingQuiz}/>
        <Route path="/privacy-quiz" component={PrivacyQuiz}/>
        <Route path="/safe-browsing" component={SafeBrowsing}/>
        <Route path="/safe-b-quiz" component={SafeBQuiz}/>
        <Route path="/quiz" component={Quiz}/>
        <Route path="/intro" component={IntroductionPage}/>








      </Switch>
    </Router>
    </ChakraProvider>
  );
};

export default App;

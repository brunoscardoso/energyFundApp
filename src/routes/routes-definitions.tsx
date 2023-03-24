import Home from 'screens/home';
import SignUp from 'screens/onboarding/signup';
import Login from 'screens/onboarding/login';

const routesDefinitions = {
  signup: {
    screen: SignUp,
    name: 'signup',
  },
  login: {
    screen: Login,
    name: 'login',
  },
  home: {
    screen: Home,
    name: 'home',
  },
};

export default routesDefinitions;

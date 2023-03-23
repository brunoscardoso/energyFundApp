import Home from 'screens/home';
import SignUp from 'screens/signup';
import Login from 'screens/login';

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

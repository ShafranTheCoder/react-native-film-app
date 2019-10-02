import {createStackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import StargateHomeScreen from '../screen1/HomeScreen';
import DetailsScreen from './DetailsScreen';
import {SPIDER_HOME, STARGATE_HOME, SPIDER_DETAILS} from '../routes';

export default createStackNavigator(
  {
    [SPIDER_HOME]: HomeScreen,
    [SPIDER_DETAILS]: DetailsScreen,
    [STARGATE_HOME]: StargateHomeScreen,
  },
  {
    headerMode: 'none',
  },
);

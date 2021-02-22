import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';

const navigatior = createStackNavigator({
  Home: HomeScreen,
  Product: ProductScreen,
   },{
  initialRouteName: 'Home',
  defaultNavigationOptions:{
    title: 'Business Search'
  }
}) 

export default createAppContainer(navigatior)
import AnimatedSplash from 'react-native-animated-splash-screen';
import { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native'
import { Router, Scene, Drawer, Actions } from 'react-native-router-flux';
import LogInPage from './pages/logInPage';
import InstructorsPage from './pages/instructors';
import SignUpPage from './components/regWizard/signUp';
import LoggedInParent from './pages/loggedInParent';
import Schedule from './pages/schedule'; 
import { Marketplace } from './components/marketplace/marketplace';
import { HamburgerNav } from './components/hamburgerNav';
import { FontAwesome } from 'expo-vector-icons';
import { Provider } from 'react-redux';
import { store } from './redux/app-redux';

export default function App() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [userLoggedInData, setUserLoggedInData] = useState([]);
  const [test, setTest] = useState('false');

  const tabIconNews =({ focused }) => {
    return(
      <FontAwesome name='newspaper-o' size={20} color={focused ? 'blue' : 'gray'} />
    );
  };

  const tabIconCalendar =({ focused }) => {
    return(
      <FontAwesome name='calendar' size={20} color={focused ? 'blue' : 'gray'} />
    );
  };

  const tabIconShopping =({ focused }) => {
    return(
      <FontAwesome name='shopping-cart' size={20} color={focused ? 'blue' : 'gray'} />
    );
  };

  const tabIconCog =({ focused }) => {
    return(
      <FontAwesome name='cog' size={20} color={focused ? 'blue' : 'gray'} />
    );
  };

  const tabIconGroup =({ focused }) => {
    return(
      <FontAwesome name='group' size={20} color={focused ? 'blue' : 'gray'} />
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 5000);
  }, [])
  
  return (
    <Provider store={store}>
    <AnimatedSplash
        translucent={true}
        isLoaded={isLoaded}
        logoImage={require("./assets/FoundryLogoNEWEST.png")}
        backgroundColor={"#262626"}
        logoHeight={300}
        logoWidth={300}
      >
      <Router navigationBarStyle={{backgroundColor:"#262b2a"}} titleStyle={{color:'gray'}}>
        <Scene key="root" panHandlers={null}>
          <Scene
            initial
            key="login"
            component={LogInPage}
            title="LogInPage"
            hideNavBar={true}
          />

          <Scene
            key="signUp"
            component={SignUpPage}
            title="Sign Up"
            back
            backButtonTintColor="gray"
          />
          
          <Scene
            key="loggedInParent"
            component={LoggedInParent}
            title="loggedInParent"
            hideNavBar
          />
             
          <Drawer
            hideNavBar
            key="drawerMenu"
            contentComponent={HamburgerNav}
            drawerWidth={300}
            drawerPosition="right"
            >
          <Scene
            key="instructors"
            component={InstructorsPage}
            title="Instructors"
            back
            //renderTitle={false}
            renderRightButton={<View style={{paddingRight: 15, paddingTop:2}}><FontAwesome name='navicon' size={30} color='blue' onPress={() => {Actions.drawerOpen()}}/></View>}
          />
          </Drawer>
        </Scene>
      </Router>
      </AnimatedSplash>
      </Provider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
  height: 50,
  borderTopColor: 'darkgrey',
  opacity: 0.98,
  justifyContent:'space-between'
  }
  });

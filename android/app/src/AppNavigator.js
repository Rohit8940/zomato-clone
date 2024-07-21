import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./Screens/Splash";
import Login from "./Screens/Login";
import MainScreen from "./Screens/MainScreen";

const Stack = createStackNavigator();

const AppNavigator=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component={Splash} name='Splash' options={{headerShown:false}} />
                <Stack.Screen component={Login} name='Login' options={{headerShown:false}} />
                <Stack.Screen component={MainScreen} name='MainScreen' options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;
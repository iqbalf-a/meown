import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import Splash from "../screens/Splash/Splash";
import Login from "../screens/Auth/Login/Login";
import Register from "../screens/Auth/Register/Register";
import Home from "../screens/Main/Home/Home";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Pet from "../screens/Main/Pet/Pet";
import Settings from "../screens/Main/Settings/Settings";

const Tabs = createBottomTabNavigator();

const MainTab = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name={"Home"} component={Home}/>
            <Tabs.Screen name={"Pet"} component={Pet}/>
            <Tabs.Screen name={"Settings"} component={Settings}/>
        </Tabs.Navigator>
    )
}

export default MainTab
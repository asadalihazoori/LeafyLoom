import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../screens/Home/Home";
import Profile from "../screens/Profie/Profile";
import Cart from "../screens/Cart/Cart";
import Orders from "../screens/Orders/Orders";
import Wallet from "../screens/Wallet/Wallet";
import { SvgXml } from "react-native-svg";
import { icons } from "../assets/icons/icons";
import { Text } from "react-native";
import { fontStyle } from "../theme/fonstStyle";
import { colors } from "../theme/colors";
const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator

            screenOptions={({ route }) => ({

                tabBarLabel: ({ focused }) => {
                    // Define your custom text style for tab labels here
                    const labelStyle = {
                        // fontSize: focused ? 16 : 14, // Adjust the font size as needed
                        // fontWeight: focused ? "bold" : "normal", // Adjust the font weight as needed
                        // color: focused ? "green" : "grey", // Adjust the text color as needed

                    };

                    return (
                        <Text style={[fontStyle.regular10, { color: focused ? colors.primaryGreen : colors.grey500 }]}>
                            {route.name} {/* Use the route name as the tab label */}
                        </Text>
                    );
                },

                tabBarIcon: ({ focused }) => {

                    let iconName;


                    switch (route.name) {
                        case 'Home':
                            iconName = focused ? icons.home.green : icons.home.grey;
                            break;

                        case 'Profile':
                            iconName = focused ? icons.profile.green : icons.profile.grey;
                            break;

                        case 'Cart':
                            iconName = focused ? icons.cart.green : icons.cart.grey;
                            break;

                        case 'Orders':
                            iconName = focused ? icons.orders.green : icons.orders.grey;
                            break;

                        case 'Wallet':
                            iconName = focused ? icons.wallet.green : icons.wallet.grey;
                            break;

                        default:
                            break;
                    }

                    return <SvgXml xml={iconName} />;

                },



            })}
            initialRouteName="Profile"


        >
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
            <Tab.Screen name="Orders" component={Orders} options={{ headerShown: false }} />
            <Tab.Screen name="Wallet" component={Wallet} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

export default BottomTab
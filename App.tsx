import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import routes from './src/config/routes';
import { useLogging } from './src/hooks/useLogging';
import { MenuProvider } from 'react-native-popup-menu';
import { navigationRef } from './src/hooks/rootNavigation';
import { Feather } from '@expo/vector-icons';
import * as RootNavigation from './src/hooks/rootNavigation'
import styles from './styles/styles';
import { TouchableOpacity } from 'react-native';

declare global { var isHomeJustLaunched: boolean }

const Stack = createStackNavigator();

export default function App() {
    const [logging] = useLogging('Application');

    useEffect(() => {
        logging.info('Loading application.');
    }, [logging]);

    return (
        <MenuProvider>
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator>
                    {routes.map((r, i) => (
                        <Stack.Screen key={i} name={r.name} component={r.component} options={{
                            headerRight: () => (
                                <TouchableOpacity
                                    hitSlop={20}
                                    onPressOut={() => RootNavigation.navigate('Settings')}>
                                    <Feather style={styles.headerButton}
                                        name='settings'
                                        size={35}
                                    />
                                </TouchableOpacity>
                            ),
                            headerTitleStyle: {
                                fontSize: 25,
                                fontWeight: 'bold',
                            }
                        }} />
                    ))}
                </Stack.Navigator>
            </NavigationContainer>
        </MenuProvider >
    );
}

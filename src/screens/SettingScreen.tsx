/**
 * Settings screen to change language
 */

import React, { useEffect } from 'react';
import { Button, View } from 'react-native';
import { useLogging } from '../hooks/useLogging';
import { IStackScreenProps } from '../library/StackScreenProps';
import i18n from '../config/localization';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../styles/styles';

const SettingScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
     // Logging to SettingsScreen
    const [logging] = useLogging('Setting Screen');
    const { navigation, route } = props;

    // Hook for logging
    useEffect(() => {
        logging.info({ navigation, route });
    }, [logging]);

    // Set header consider to choosen language
    if (i18n.language === 'en') navigation.setOptions({ title: 'Settings' })
    else navigation.setOptions({ title: 'Настройки' })

    /* When button is pressed then set data in storage on device with 'en' or 'ru' values, 
    change i18n settings and navigate to HomeScreen with an empty data in params to force component to update*/
    return (
        <View style={styles.container}>
            {i18n.language == 'en' ?
                <Button onPress={async () => {
                    AsyncStorage.setItem('LNG', 'ru');
                    i18n.changeLanguage('ru');
                    navigation.navigate('List', { data: '' });
                }}
                    title='Switch to Russian' />
                : <Button onPress={async () => {
                    AsyncStorage.setItem('LNG', 'en');
                    i18n.changeLanguage('en');
                    navigation.navigate('List', { data: '' });
                }}
                    title='Переключиться на Английский' />}
        </View>
    );
};

// Export SettingsScreen
export default SettingScreen;

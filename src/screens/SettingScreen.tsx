import React, { useEffect } from 'react';
import { Button, View } from 'react-native';
import { useLogging } from '../hooks/useLogging';
import { IStackScreenProps } from '../library/StackScreenProps';
import i18n from '../config/localization';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../styles/styles';

const SettingScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
    const [logging] = useLogging('Setting Screen');
    const { navigation, route } = props;

    useEffect(() => {
        logging.info({ navigation, route });
    }, [logging]);

    if (i18n.language === 'en') navigation.setOptions({ title: 'Settings' })
    else navigation.setOptions({ title: 'Настройки' })

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

export default SettingScreen;

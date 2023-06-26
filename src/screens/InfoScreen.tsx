/**
 * Screen that contains information about specific driver with a given number and functionality to contact with him
 */

import React, { useEffect } from 'react';
import { Text, View, Linking } from 'react-native';
import { useLogging } from '../hooks/useLogging';
import { IStackScreenProps } from '../library/StackScreenProps';
import i18n from '../config/localization';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../../styles/styles';

const InfoScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
    // Logging to InfoScreen
    const [logging] = useLogging('Info Screen');
    const { navigation, route } = props;

    // Hook for logging
    useEffect(() => {
        logging.info({ navigation, route });
    }, [logging]);

    // Set header consider to choosen language
    if (i18n.language === 'en') navigation.setOptions({ title: 'Information' })
    else navigation.setOptions({ title: 'Информация' })

    // Info about choosen driver passed from HomeScreen' flatlist
    let data: string = route.params.data;

    // For sake of simplicity every driver has the same phone number
    // It's possible to assign different numbers for drivers in .json file and process it with other data.
    const phoneNumber: string = 'Enter driver number here';
    
    // Request that will be used to contact driver on whatsapp with a prepared text
    const request: string = 'http://api.whatsapp.com/send?text=' + i18n.t('request') + '&phone=' + phoneNumber;

    // Enter given number in android keypad
    const makePhoneCall = () => Linking.openURL('tel: ' + phoneNumber);

    // Contact driver with prepared text
    const sendWhatsappMessage = () => Linking.openURL(request);

    // For buttons was used TouchableOpacity cause of easiness of styling it
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.title}>{data}</Text>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.title}
                            onPress={() => makePhoneCall()}>
                            {i18n.t('call')}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.title}
                            onPress={() => sendWhatsappMessage()}>
                            {i18n.t('message')}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

// Export InfoScreen to use it outside
export default InfoScreen;

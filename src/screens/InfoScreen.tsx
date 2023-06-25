import React, { useEffect } from 'react';
import { Text, View, Linking } from 'react-native';
import { useLogging } from '../hooks/useLogging';
import { IStackScreenProps } from '../library/StackScreenProps';
import i18n from '../config/localization';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../../styles/styles';

const InfoScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
    const [logging] = useLogging('Info Screen');
    const { navigation, route } = props;

    useEffect(() => {
        logging.info({ navigation, route });
    }, [logging]);

    if (i18n.language === 'en') navigation.setOptions({ title: 'Information' })
    else navigation.setOptions({ title: 'Информация' })

    let data: string;

    data = route.params.data;

    const phoneNumber: string = 'Enter driver number here';
    const request: string = 'http://api.whatsapp.com/send?text=' + i18n.t('request') + '&phone=' + phoneNumber;

    const makePhoneCall = () => Linking.openURL('tel: ' + phoneNumber);
    const sendWhatsappMessage = () => Linking.openURL(request);

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

export default InfoScreen;

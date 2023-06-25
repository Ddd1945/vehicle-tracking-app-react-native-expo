import React, { useEffect } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useLogging } from '../hooks/useLogging';
import { IStackScreenProps } from '../library/StackScreenProps';
import driversDataEn from '../../assets/data/driversDataEn.json';
import driversDataRu from '../../assets/data/driversDataRu.json'
import i18n from '../config/localization';
import styles from '../../styles/styles';
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
    const [isLogedin, setIsLogedin] = React.useState(false);

    if (!global.isHomeJustLaunched)
        AsyncStorage.getItem('LNG').then((lng) => {
            if (lng != null) {
                if (lng === 'en') i18n.changeLanguage('en');
                else i18n.changeLanguage('ru');
                setIsLogedin(true)

                global.isHomeJustLaunched = true;
            } else setIsLogedin(false)
        })

    const [logging] = useLogging('Home Screen');
    const { navigation, route } = props;

    interface flatData { record: string };
    const DATA: flatData[] = [];

    let driversData;

    if (i18n.language === 'en') {
        navigation.setOptions({ title: 'List' });
        driversData = driversDataEn;
    } else {
        navigation.setOptions({ title: 'Список' });
        driversData = driversDataRu;
    }

    useEffect(() => {
        logging.info({ navigation, route });
    }, [logging]);

    {
        for (let a = 0; a < driversData.length; a++)
            DATA.push({
                record:
                    i18n.t('model') + String(driversData.at(a)?.model) + '\n' +
                    i18n.t('vin') + String(driversData.at(a)?.vin) + '\n' +
                    i18n.t('driver') + String(driversData.at(a)?.driver) + '\n' +
                    i18n.t('type') + String(driversData.at(a)?.type)
            })
    }

    type ItemProps = { title: string };

    const Item = ({ title }: ItemProps) => (
        <TouchableOpacity onPress={() => navigation.navigate('Map', { data: title })}>
            <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity >
    );

    return (
        <View >
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.record} />}
                keyExtractor={item => item.record} />
        </View>
    );
};

export default HomeScreen;
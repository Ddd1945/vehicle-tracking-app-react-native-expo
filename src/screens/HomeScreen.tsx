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
    // Hooks to force component to reload
    const [isLogedin, setIsLogedin] = React.useState(false);

    // If program was just launched then check language in storage, change language in i18n settings and update component.
    if (!global.isHomeJustLaunched)
        AsyncStorage.getItem('LNG').then((lng) => {
            if (lng != null) {
                if (lng === 'en') i18n.changeLanguage('en');
                else i18n.changeLanguage('ru');
                setIsLogedin(true)

                global.isHomeJustLaunched = true;
            } else setIsLogedin(false)
        })

    // logging for HomeScreen component
    const [logging] = useLogging('Home Screen');
    const { navigation, route } = props;

    // Data that will be used in flatlist
    interface flatData { record: string };
    const DATA: flatData[] = [];

    // Here will be stored data from .json file
    let driversData;

    // Assign data with consideration of choosen language
    if (i18n.language === 'en') {
        navigation.setOptions({ title: 'List' });
        driversData = driversDataEn;
    } else {
        navigation.setOptions({ title: 'Список' });
        driversData = driversDataRu;
    }

    // Hook for logging
    useEffect(() => {
        logging.info({ navigation, route });
    }, [logging]);

    // Process data from json file, sort it and convert to string for flatlist
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

    // Configuration for item props
    type ItemProps = { title: string };

    // Representation of every single item in the flatlist.
    const Item = ({ title }: ItemProps) => (
        <TouchableOpacity onPress={() => navigation.navigate('Map', { data: title })}>
            <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity >
    );

    // Return flatlist
    return (
        <View >
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.record} />}
                keyExtractor={item => item.record} />
        </View>
    );
};

// export component to use it outside
export default HomeScreen;

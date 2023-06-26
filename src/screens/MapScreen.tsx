/**
 * Screen that creates random location for drivers in Moscow vicinity
 */

import React, { useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import { useLogging } from '../hooks/useLogging';
import { IStackScreenProps } from '../library/StackScreenProps';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import i18n from '../config/localization';
import styles from '../../styles/styles';

const MapScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
    // logging for HomeScreen component
    const [logging] = useLogging('Map Screen');
    const { navigation, route } = props;

    // Hook for logging
    useEffect(() => {
        logging.info({ navigation, route });
    }, [logging]);

    // Set header consider to choosen language
    if (i18n.language === 'en') navigation.setOptions({ title: 'Map' })
    else navigation.setOptions({ title: 'Карта' })

    // Data about choosen driver passed from HomeScreen' flatlist
    let data: string = route.params.data;

    // Data used for map' aspect ratio
    const { width, height } = Dimensions.get('window');

    // Setting up map's ratio and driver' position
    const ASPECT_RATIO = width / height;
    const LATITUDE_DELTA = 0.02;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
    const INITIAL_POSITION = {
        latitude: 55.74980 + Math.random() * 0.1,
        longitude: 37.624444 + Math.random() * 0.1,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    };

    // Set an icon for vehicle's type
    if (data.includes('Cargo')) var url = require('../../assets/icons/cargo.png');
    else if (data.includes('Special Transport')) var url = require('../../assets/icons/special-transport.png');
    else var url = require('../../assets/icons/passenger-car.png');

    // Return UI component with configured map
    return (
        <View>
            <MapView style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={INITIAL_POSITION}>
                <Marker
                    coordinate={INITIAL_POSITION}
                    title={data}
                    onPress={() => navigation.navigate('Information', { data: data })}
                    image={url}
                />
            </MapView>
        </View>
    );
};

// Export MapScreen
export default MapScreen;

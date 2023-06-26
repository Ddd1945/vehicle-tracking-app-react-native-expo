// Props for routes

import IRouteProps from '../library/RouteProps';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import InfoScreen from '../screens/InfoScreen';
import SettingScreen from '../screens/SettingScreen';

const routes: IRouteProps[] = [
    {
        name: 'List',
        component: HomeScreen
    },
    {
        name: 'Map',
        component: MapScreen
    },
    {
        name: 'Information',
        component: InfoScreen
    },
    {
        name: 'Settings',
        component: SettingScreen
    }
];

// Export routes
export default routes;

/**
 * i18n is created to handle multiple languages in application
 */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources: {
        en: {
            translation: {
                request: 'Hi there! Would you tell me what is your order number now.',
                call: 'Make A Call',
                message: 'Message',
                model: 'MODEL >> ',
                vin: 'VIN >> ',
                driver: 'DRIVER >> ',
                type: 'TYPE >> '
            },
        },
        ru: {
            translation: {
                request: 'Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе.',
                call: 'Позвонить',
                message: 'Написать',
                model: 'МОДЕЛЬ >> ',
                vin: 'VIN >> ',
                driver: 'ВОДИТЕЛЬ >>  ',
                type: 'ТИП >>  '
            },
        }
    },
    lng: 'en',
    fallbackLng: 'en'
});

// Export i18n
export default i18n;

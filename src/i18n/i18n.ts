import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import REGISTER_vi from '../locales/vi/register.json';
import REGISTER_en from '../locales/en/register.json';
import LOGIN_vi from '../locales/vi/login.json';
import LOGIN_en from '../locales/en/login.json';
import USERDETAIL_vi from '../locales/vi/userDetail.json';
import USERDETAIL_en from '../locales/en/userDetail.json';
import USERLIST_vi from '../locales/vi/userList.json';
import USERLIST_en from '../locales/en/userList.json';
import FORGOTPASSWORD_vi from '../locales/vi/forgotPassword.json';
import FORGOTPASSWORD_en from '../locales/en/forgotPassword.json';
import COMFIRMPASSWORDCODE_vi from '../locales/vi/comfirmPasswordCode.json';
import COMFIRMPASSWORDCODE_en from '../locales/en/comfirmPasswordCode.json';
import HEADER_vi from '../locales/vi/header.json';
import HEADER_en from '../locales/en/header.json';
import FOOTER_vi from '../locales/vi/footer.json';
import FOOTER_en from '../locales/en/footer.json';
import YUPVALIDATE_vi from '../locales/vi/yupValidate.json';
import YUPVALIDATE_en from '../locales/en/yupValidate.json';
import SLIDEBAR_vi from '../locales/vi/slidebar.json';
import SLIDEBAR_en from '../locales/en/slidebar.json';
import DASHBOARD_vi from '../locales/vi/dashboard.json';
import DASHBOARD_en from '../locales/en/dashboard.json';
const resources = {
    en: {
        register: REGISTER_en,
        login: LOGIN_en,
        userDetail: USERDETAIL_en,
        userList: USERLIST_en,
        forgotPassword: FORGOTPASSWORD_en,
        comfirmPasswordCode: COMFIRMPASSWORDCODE_en,
        header: HEADER_en,
        footer: FOOTER_en,
        yupValidate:YUPVALIDATE_en,
        slidebar: SLIDEBAR_en,
        dashboard: DASHBOARD_en
    },
    vi: {
        register: REGISTER_vi,
        login: LOGIN_vi,
        userDetail: USERDETAIL_vi,
        userList: USERLIST_vi,
        forgotPassword: FORGOTPASSWORD_vi,
        comfirmPasswordCode: COMFIRMPASSWORDCODE_vi,
        header: HEADER_vi,
        footer: FOOTER_vi,
        yupValidate:YUPVALIDATE_vi,
        slidebar: SLIDEBAR_vi,
        dashboard: DASHBOARD_vi
    },
};

const defaultNS = '';
i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    ns: ['register', 'login', 'userDetail', 'userList', 'forgotPassword', 'comfirmPasswordCode', 'header', 'footer', 'yupValidate', 'slidebar', 'dashboard'],
    fallbackLng: 'vi',
    defaultNS,
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
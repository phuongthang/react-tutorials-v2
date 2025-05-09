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
import SIDEBAR_vi from '../locales/vi/sidebar.json';
import SIDEBAR_en from '../locales/en/sidebar.json';
import DASHBOARD_vi from '../locales/vi/dashboard.json';
import DASHBOARD_en from '../locales/en/dashboard.json';
import TOASTMESSAGE_vi from '../locales/vi/toastMessage.json';
import TOASTMESSAGE_en from '../locales/en/toastMessage.json';
import USERTABLE_vi from '../locales/vi/userTable.json';
import USERTABLE_en from '../locales/en/userTable.json';
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
        yupValidate: YUPVALIDATE_en,
        sidebar: SIDEBAR_en,
        dashboard: DASHBOARD_en,
        toastMessage: TOASTMESSAGE_en,
        userTable: USERTABLE_en
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
        yupValidate: YUPVALIDATE_vi,
        sidebar: SIDEBAR_vi,
        dashboard: DASHBOARD_vi,
        toastMessage: TOASTMESSAGE_vi,
        userTable: USERTABLE_vi
    },
};

const defaultNS = '';
i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    ns: [
        'register',
        'login',
        'userDetail',
        'userList',
        'forgotPassword',
        'comfirmPasswordCode',
        'header',
        'footer',
        'yupValidate',
        'sidebar',
        'dashboard',
        'toastMessage',
        'userTable'
    ],

    fallbackLng: 'vi',
    defaultNS,
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;

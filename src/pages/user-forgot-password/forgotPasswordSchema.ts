import * as yup from 'yup';
import i18n from '../../i18n/i18n';

yup.setLocale({
    mixed: {
        required: () => i18n.t('Required',{ ns: 'yupValidate' }),
    },
    string: {
        email:() => i18n.t('Email',{ ns: 'yupValidate' }),
        max: ({ max }) => i18n.t('Max', { ns: 'yupValidate' , max }),
    },
});

export const forgotPasswordSchema = yup.object({
    email: yup.string().email().required().max(256),
});

export default yup;

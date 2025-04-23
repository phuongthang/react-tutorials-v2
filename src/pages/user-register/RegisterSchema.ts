import * as yup from 'yup';
import i18n from '../../i18n/i18n';

yup.setLocale({
    mixed: {
        required: () => i18n.t('Required',{ ns: 'yupValidate' }),
    },
    string: {
        email:() => i18n.t('Email',{ ns: 'yupValidate' }),
        min: ({ min }) => i18n.t('Min',  { ns: 'yupValidate', min }),
        max: ({ max }) => i18n.t('Max', { ns: 'yupValidate' , max }),
    },
});

const phoneRegex = /^(0|\+84)[3-9][0-9]{8}$/;

export const registerSchema = yup.object({
    userName: yup.string().required().max(256),
    email: yup.string().email().required().max(256),
    fullName: yup.string().required().max(256),
    dob: yup.string().required(),
    password: yup.string().required().min(8),
    phoneNumber: yup.string().required().matches(phoneRegex, () => i18n.t('Phone',{ ns: 'yupValidate' })),
    gender: yup.string().required(),
    role: yup.string().required(),
    comfirmPassword: yup
        .string()
        .required()
        .min(8)
        .oneOf([yup.ref('password')], () => i18n.t('Comfirm password',{ ns: 'yupValidate' })),
});

export default yup;

import * as yup from 'yup';
import i18n from '../../i18n/i18n';

yup.setLocale({
    mixed: {
        required: () => i18n.t('Required', { ns: 'yupValidate' }),
    },
    string: {
        email: () => i18n.t('Email', { ns: 'yupValidate' }),
        min: ({ min }) => i18n.t('Min', { ns: 'yupValidate', min }),
        max: ({ max }) => i18n.t('Max', { ns: 'yupValidate', max }),
    },
});


const phoneRegex = /^(0|\+84)[3-9][0-9]{8}$/;
const MAX_FILE_SIZE = 2 * 1024 * 1024;
const SUPPORTED_FORMATS = ['image/jpeg', 'image/png', 'image/jpg'];

export const userDetailSchema = yup.object({
    fullName: yup.string().required().max(256),
    userName: yup.string().required().max(256),
    email: yup.string().email().required().max(256),
    phoneNumber: yup.string().required().matches(phoneRegex, () => i18n.t('Phone',{ ns: 'yupValidate' })),
    gender: yup.string().required(),
    role: yup.string().required(),
    dob: yup.string().required(),
    file: yup
        .mixed()
        .test('fileSize', () => i18n.t('FileLarge',{ ns: 'yupValidate' }), function (value) {
            if (!value) return true;
            if (value instanceof FileList) {
                if (value.length === 0) return true;
                const file = value.item(0);
                return file ? file.size <= MAX_FILE_SIZE : true;
            }
        })
        .test('fileFormat',() => i18n.t('Avatar',{ ns: 'yupValidate' }), function (value) {
            if (!value) return true;
            if (value instanceof FileList) {
                if (value.length === 0) return true;
                const file = value.item(0);
                return file ? SUPPORTED_FORMATS.includes(file.type) : true;
            }
        }),
});

export default yup;

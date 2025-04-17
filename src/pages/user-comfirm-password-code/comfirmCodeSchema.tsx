import * as yup from 'yup';

yup.setLocale({
    mixed: {
        required: 'Trường này là bắt buộc',
    },
    string: {
        email: 'Email không hợp lệ',
        min: ({ min }) => `Tối thiểu ${min} ký tự`,
    },
});

export const comfirmCodeSchema = yup.object({
    passwordCode: yup.string()
    .required('Mã không được để trống')
    .matches(/^\d{4}$/, 'Mã phải gồm đúng 4 chữ số'),
});

export default yup;

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

export const forgotPasswordSchema = yup.object({
    email: yup.string().email().required('Nhập địa chỉ email'),
});

export default yup;

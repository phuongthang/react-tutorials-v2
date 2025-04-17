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

const nameRegex = /^[a-zA-ZÀ-ỹ\s]+$/;
const numberRegex = /^(?!\d+$).+$/;
const phoneRegex = /^(0|\+84)[3-9][0-9]{8}$/;

export const registerSchema = yup.object({
    fullName: yup.string().required('Nhập tên đầy đủ').matches(nameRegex, 'Tên chỉ được chứa chữ cái và khoảng trắng'),
    userName: yup.string().required('Nhập tên đăng nhập').matches(numberRegex, 'Tên đăng nhập không hợp lệ'),
    email: yup.string().email().required('Nhập địa chỉ email'),
    phoneNumber: yup.string().required('Nhập số điện thoại').matches(phoneRegex, 'số điện thoại không hợp lệ'),
    gender: yup.string().required('Chọn giới tính'),
    role: yup.string().required('Vui lòng chọn'),
    dob: yup.string().required('Chọn ngày sinh'),
    password: yup.string().required('Nhập mật khẩu').min(8),
    confirmPassword: yup
        .string()
        .required('Nhập lại mật khẩu')
        .oneOf([yup.ref('password')], 'Mật khẩu không khớp'),
});

export default yup;

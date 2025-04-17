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
const MAX_FILE_SIZE = 2 * 1024 * 1024;
const SUPPORTED_FORMATS = ['image/jpeg', 'image/png', 'image/jpg'];

export const userDetailSchema = yup.object({
    fullName: yup.string().required('Nhập tên đầy đủ').matches(nameRegex, 'Tên chỉ được chứa chữ cái và khoảng trắng'),
    userName: yup.string().required('Nhập tên đăng nhập').matches(numberRegex, 'Tên đăng nhập không hợp lệ'),
    email: yup.string().email().required('Nhập địa chỉ email'),
    phoneNumber: yup.string().required('Nhập số điện thoại').matches(phoneRegex, 'số điện thoại không hợp lệ'),
    gender: yup.string().required('Chọn giới tính'),
    role: yup.string().required('Vui lòng chọn'),
    dob: yup.string().required('Chọn ngày sinh'),
    file: yup.mixed().test("fileSize", "File quá lớn. Tối đa 2MB", function (value) {
        if (!value) return true; 
        if (value instanceof FileList) {
          if (value.length === 0) return true;
          const file = value.item(0);
          return file ? file.size <= MAX_FILE_SIZE : true;
        }
      })
      .test("fileFormat", "Định dạng file không hợp lệ (chỉ cho phép JPEG, PNG, JPG)", function (value) {
        if (!value) return true;
        if (value instanceof FileList) {
          if (value.length === 0) return true;
          const file = value.item(0);
          return file ? SUPPORTED_FORMATS.includes(file.type) : true;
        }
      }),
});

export default yup;

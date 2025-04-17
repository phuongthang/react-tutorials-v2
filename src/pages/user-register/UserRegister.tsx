import DatePickerForm from '../../utils/DatePickerForm';
import { Controller } from 'react-hook-form';
import InputField from '../../components/InputField';
import { UserRegisterContext } from '../../contexts/UserRegisterContext';
import { useContext } from 'react';

const UserRegister = () => {
    const { register, errors, control } = useContext(UserRegisterContext)!;

    return (
        <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-5">
            <InputField
                label="Họ và tên"
                id="fname"
                type="text"
                name="fullName"
                placeholder="Nhập tên đầy đủ"
                control={control}
                errors={errors}
            />
            <InputField
                label="Tên đăng nhập"
                type="text"
                id="uname"
                name="userName"
                placeholder="Nhập tên đăng nhập"
                control={control}
                errors={errors}
            />
            <div className="flex ">
                <div className="w-3/5 mr-2">
                    <label htmlFor="dob" className="text-gray-600 text-sm sm:mb-2 block">
                        Ngày sinh
                    </label>
                    <Controller
                        name="dob"
                        control={control}
                        render={({ field }) => (
                            <DatePickerForm
                                value={field.value}
                                onChange={field.onChange}
                                error={errors.dob?.message}
                                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
                            />
                        )}
                    />
                    <p className="text-sm font-thin text-red-600">{errors.dob?.message}</p>
                </div>
                <div>
                    <label htmlFor="gender" className="text-gray-600 text-sm sm:mb-2 block ">
                        Giới tính
                    </label>
                    <select
                        {...register('gender')}
                        id="gender"
                        defaultValue=""
                        className={`bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all ${
                            errors.gender ? 'border border-red-500' : ''
                        }`}
                    >
                        <option value="" disabled></option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
                    <p className="text-sm font-thin text-red-600">{errors.gender?.message}</p>
                </div>
            </div>
            <InputField
                label="Email"
                type="text"
                id="email"
                name="email"
                placeholder="user@example.com"
                control={control}
                errors={errors}
            />
            <InputField
                label="Số điện thoại"
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="0987654321"
                control={control}
                errors={errors}
            />
            <div>
                <label htmlFor="arole" className="text-gray-600 text-sm sm:mb-2 block ">
                    Loại tài khoản
                </label>
                <select
                    {...register('role')}
                    id="arole"
                    defaultValue=""
                    className={`bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all ${
                        errors.role ? 'border border-red-500' : ''
                    }`}
                >
                    <option value="" disabled></option>
                    <option value="1">Quản trị viên</option>
                    <option value="2">Nhân viên</option>
                </select>
                <p className="text-sm font-thin text-red-600">{errors.role?.message}</p>
            </div>
            <InputField
                label="Mật khẩu"
                type="password"
                id="password"
                name="password"
                placeholder="Nhập mật khẩu"
                control={control}
                errors={errors}
            />
            <InputField
                label="Xác nhận mật khẩu"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Nhập lại mật khẩu"
                control={control}
                errors={errors}
            />
        </div>
    );
};
export default UserRegister;

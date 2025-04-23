import DatePickerForm from '../../utils/DatePickerForm';
import { Controller } from 'react-hook-form';
import InputField from '../../components/InputField';
import { UserRegisterContext } from '../../contexts/UserRegisterContext';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

const UserRegister = () => {
    const {t} = useTranslation("register");
    const { register, errors, control } = useContext(UserRegisterContext)!;

    return (
        <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-5">
            <InputField
                label={t('register forms.Full name')}
                id="fname"
                type="text"
                name="fullName"
                placeholder={t('register forms.Full name placeholder')}
                control={control}
                errors={errors}
            />
            <InputField
                label={t('register forms.Username')}
                type="text"
                id="uname"
                name="userName"
                placeholder={t('register forms.Username placeholder')}
                control={control}
                errors={errors}
            />
            <div className="flex ">
                <div className="w-3/5 mr-2">
                    <label htmlFor="dob" className="text-gray-600 text-sm sm:mb-2 block">
                    {t('register forms.Day of birth')}
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
                <div className='w-1/2'>
                    <label htmlFor="gender" className="text-gray-600 text-sm sm:mb-2 block ">
                    {t('register forms.Gender')}
                    </label>
                    <select
                        {...register('gender')}
                        id="gender"
                        defaultValue=""
                        className={`bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all ${
                            errors.gender ? 'border border-red-500' : ''
                        }`}
                    >
                        
                        <option value="1">{t('register forms.Gender.Male')}</option>
                        <option value="2">{t('register forms.Gender.Female')}</option>
                    </select>
                    <p className="text-sm font-thin text-red-600">{errors.gender?.message}</p>
                </div>
            </div>
            <InputField
                label={t('register forms.Email')}
                type="text"
                id="email"
                name="email"
                placeholder={t('register forms.Email placeholder')}
                control={control}
                errors={errors}
            />
            <InputField
                label={t('register forms.Phone number')}
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder={t('register forms.Phone number placeholder')}
                control={control}
                errors={errors}
            />
            <div>
                <label htmlFor="role" className="text-gray-600 text-sm sm:mb-2 block ">
                {t('register forms.Account role')}
                </label>
                <select
                    {...register('role')}
                    id="role"
                    defaultValue=""
                    className={`bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all ${
                        errors.role ? 'border border-red-500' : ''
                    }`}
                >
                    <option value="1">{t('register forms.Account role.Admin')}</option>
                    <option value="2">{t('register forms.Account role.User')}</option>
                </select>
                <p className="text-sm font-thin text-red-600">{errors.role?.message}</p>
            </div>
            <InputField
                label={t('register forms.Password')}
                type="password"
                id="password"
                name="password"
                placeholder={t('register forms.Password placeholder')}
                control={control}
                errors={errors}
            />
            <InputField
                label={t('register forms.Confirm password')}
                type="password"
                id="comfirmPassword"
                name="comfirmPassword"
                placeholder={t('register forms.Confirm password placeholder')}
                control={control}
                errors={errors}
            />
        </div>
    );
};
export default UserRegister;

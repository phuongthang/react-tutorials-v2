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
                label={t('registerForms.fullNameLabel')}
                id="fname"
                type="text"
                name="fullName"
                placeholder={t('registerForms.fullNamePlaceholder')}
                control={control}
                errors={errors}
            />
            <InputField
                label={t('registerForms.usernameLabel')}
                type="text"
                id="uname"
                name="userName"
                placeholder={t('registerForms.usernamePlaceholder')}
                control={control}
                errors={errors}
            />
            <div className="flex ">
                <div className="w-3/5 mr-2">
                    <label htmlFor="dob" className="text-gray-600 text-sm sm:mb-2 block">
                    {t('registerForms.dayOfBirthLabel')}
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
                    {t('registerForms.genderLabel')}
                    </label>
                    <select
                        {...register('gender')}
                        id="gender"
                        defaultValue=""
                        className={`bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all ${
                            errors.gender ? 'border border-red-500' : ''
                        }`}
                    >
                        
                        <option value="1">{t('registerForms.gender.male')}</option>
                        <option value="2">{t('registerForms.gender.female')}</option>
                    </select>
                    <p className="text-sm font-thin text-red-600">{errors.gender?.message}</p>
                </div>
            </div>
            <InputField
                label={t('registerForms.emailLabel')}
                type="text"
                id="email"
                name="email"
                placeholder={t('registerForms.emailPlaceholder')}
                control={control}
                errors={errors}
            />
            <InputField
                label={t('registerForms.phoneNumberLabel')}
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder={t('registerForms.phoneNumberPlaceholder')}
                control={control}
                errors={errors}
            />
            <div>
                <label htmlFor="role" className="text-gray-600 text-sm sm:mb-2 block ">
               {t('registerForms.accountRoleLabel')}
                </label>
                <select
                    {...register('role')}
                    id="role"
                    defaultValue=""
                    className={`bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all ${
                        errors.role ? 'border border-red-500' : ''
                    }`}
                >
                    <option value="1">{t('registerForms.accountRole.admin')}</option>
                    <option value="2">{t('registerForms.accountRole.user')}</option>
                </select>
                <p className="text-sm font-thin text-red-600">{errors.role?.message}</p>
            </div>
            <InputField
                label={t('registerForms.passwordLabel')}
                type="password"
                id="password"
                name="password"
                placeholder={t('registerForms.passwordPlaceholder')}
                control={control}
                errors={errors}
            />
            <InputField
                label={t('registerForms.confirmPasswordLabel')}
                type="password"
                id="comfirmPassword"
                name="comfirmPassword"
                placeholder={t('registerForms.confirmPasswordPlaceholder')}
                control={control}
                errors={errors}
            />
        </div>
    );
};
export default UserRegister;

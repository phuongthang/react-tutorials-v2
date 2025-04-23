// src/components/UserDetailFormUI.tsx
import React from 'react';
import { UseFormRegister, FieldErrors, Controller } from 'react-hook-form';
import DatePickerForm from '../../utils/DatePickerForm';
import { User, Mail, Calendar, Phone, Users, FileText, Image } from 'lucide-react';
import { userDetailFormData } from './UserDetailContainer';
import { useTranslation } from 'react-i18next';
import ImageInput from '../../components/ImageInput';

interface UserDetailProps {
    register: UseFormRegister<userDetailFormData>;
    errors: FieldErrors<userDetailFormData>;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    control: any;
    onCancel: () => void;
    isDirty: boolean;
}

const UserDetail: React.FC<UserDetailProps> = ({ register, errors, onSubmit, control, onCancel, isDirty }) => {
    const { t } = useTranslation('userDetail');
    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-3xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t('Heading')}</h2>

                <form onSubmit={onSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="flex items-center text-sm font-medium text-gray-700">
                                <User className="w-4 h-4 mr-2 text-blue-600" />
                                {t('user detail forms.Full name')}
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    {...register('fullName')}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200"
                                />
                            </div>
                            {errors.fullName && (
                                <p className="text-red-500 text-sm mt-1">{errors.fullName.message as string}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="flex items-center text-sm font-medium text-gray-700">
                                <FileText className="w-4 h-4 mr-2 text-blue-600" />
                                {t('user detail forms.Username')}
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    {...register('userName')}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200"
                                />
                            </div>
                            {errors.userName && (
                                <p className="text-red-500 text-sm mt-1">{errors.userName.message as string}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="flex items-center text-sm font-medium text-gray-700">
                                <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                                {t('user detail forms.Day of birth')}
                            </label>
                            <Controller
                                control={control}
                                name="dob"
                                render={({ field: { value, onChange } }) => (
                                    <DatePickerForm
                                        value={value}
                                        onChange={onChange}
                                        error={errors.dob ? (errors.dob.message as string) : ''}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200"
                                    />
                                )}
                            />
                            {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob.message as string}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="flex items-center text-sm font-medium text-gray-700">
                                <Users className="w-4 h-4 mr-2 text-blue-600" />
                                {t('user detail forms.Gender')}
                            </label>
                            <select
                                {...register('gender')}
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200 bg-white"
                            >
                                <option value="1">{t('user detail forms.Gender.Male')}</option>
                                <option value="2">{t('user detail forms.Gender.Female')}</option>
                            </select>
                            {errors.gender && (
                                <p className="text-red-500 text-sm mt-1">{errors.gender.message as string}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label className="flex items-center text-sm font-medium text-gray-700">
                                <Mail className="w-4 h-4 mr-2 text-blue-600" />
                                {t('user detail forms.Email')}
                            </label>
                            <div className="relative">
                                <input
                                    disabled
                                    type="email"
                                    {...register('email')}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 text-gray-500 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="flex items-center text-sm font-medium text-gray-700">
                                <Phone className="w-4 h-4 mr-2 text-blue-600" />
                                {t('user detail forms.Phone number')}
                            </label>
                            <div className="relative">
                                <input
                                    type="tel"
                                    {...register('phoneNumber')}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200"
                                />
                            </div>
                            {errors.phoneNumber && (
                                <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message as string}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="flex items-center text-sm font-medium text-gray-700">
                                <Users className="w-4 h-4 mr-2 text-blue-600" />
                                {t('user detail forms.Account role')}
                            </label>
                            <select
                                {...register('role')}
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200 bg-white"
                            >
                                <option value="1">{t('user detail forms.Account role.Admin')}</option>
                                <option value="2">{t('user detail forms.Account role.User')}</option>
                            </select>
                            {errors.role && (
                                <p className="text-red-500 text-sm mt-1">{errors.role.message as string}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="flex items-center text-sm font-medium text-gray-700">
                                <Image className="w-4 h-4 mr-2 text-blue-600" />
                                {t('user detail forms.Avatar')}
                            </label>
                            <Controller
                                name="avatar"
                                control={control}
                                render={({ field: { onChange, onBlur, name }, fieldState: { error } }) => (
                                    <ImageInput
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        name={name}
                                        error={error?.message}
                                    />
                                )}
                            />
                            
                        </div>
                    </div>

                    <div className="flex justify-end space-x-4 pt-6">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-all duration-200 font-medium"
                        >
                            {t('Back')}
                        </button>
                        <button
                            disabled={!isDirty}
                            type="submit"
                            className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                                isDirty
                                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
                                    : 'bg-gray-300 text-gray-500 opacity-50 cursor-not-allowed'
                            }`}
                        >
                            {t('Save info')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserDetail;

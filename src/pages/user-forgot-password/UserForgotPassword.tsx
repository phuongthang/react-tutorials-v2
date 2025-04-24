import React from 'react';
import { Control, FieldErrors, UseFormRegister } from 'react-hook-form';
import InputField from '../../components/InputField';
import { forgotPasswordFormInputs } from '../user-forgot-password/UserForgotPasswordContainer';
import { useTranslation } from 'react-i18next';

interface UserDetailProps {
    errors: FieldErrors<forgotPasswordFormInputs>;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    control: Control<forgotPasswordFormInputs>;
    loading: boolean;
}

const UserForgotPassword: React.FC<UserDetailProps> = ({ errors, onSubmit, loading, control }) => {
    const { t } = useTranslation('forgotPassword');
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 px-4">
            <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t('heading')}</h2>
                <p className="text-sm  text-gray-600 mb-6 text-center">{t('description')}</p>

                <form onSubmit={onSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            {t('emailLabel')}
                        </label>
                        <InputField
                            label=""
                            type="text"
                            id="email"
                            name="email"
                            placeholder=""
                            control={control}
                            errors={errors}
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200"
                        />
                    </div>
                    <button
                        disabled={loading}
                        type="submit"
                        className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold"
                    >
                        {t('submit')}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserForgotPassword;

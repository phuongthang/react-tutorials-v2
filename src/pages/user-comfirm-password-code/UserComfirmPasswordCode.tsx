import React from 'react';
import { Control, FieldErrors, } from 'react-hook-form';
import InputField from '../../components/InputField';
import { passwordCodeFormInputs } from './UserComfirmPasswordCodeContainer';
import { useTranslation } from 'react-i18next';


interface Props {
    errors: FieldErrors<passwordCodeFormInputs>;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    control: Control<passwordCodeFormInputs>;
    loading: boolean;
}

const UserComfirmPasswordCode: React.FC<Props> = ({ errors, onSubmit, loading, control }) => {
    const {t} = useTranslation('comfirmPasswordCode')
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 px-4">
            <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    {t('heading')}
                </h2>
                <p className="text-sm  text-gray-600 mb-6 text-center">
                    {t('description')}
                </p>

                <form onSubmit={onSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="passwordCode" className="block text-sm font-medium text-gray-700">
                            {t('codeLabel')}
                        </label>
                        
                        <InputField
                            label=""
                            type="text"
                            id="passwordCode"
                            name="passwordCode"
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

export default UserComfirmPasswordCode;

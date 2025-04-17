import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface ForgotPasswordFormInputs {
    email: string;
}

interface UserDetailProps {
    register: UseFormRegister<ForgotPasswordFormInputs>;
    errors: FieldErrors<ForgotPasswordFormInputs>;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    loading: boolean;
}

const UserForgotPassword: React.FC<UserDetailProps> = ({ register, errors, onSubmit, loading }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 px-4">
            <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Quên mật khẩu</h2>
                <p className="text-sm  text-gray-600 mb-6 text-center">Chúng tôi sẽ gửi mã xác thực về địa chỉ email của ban.</p>

                <form onSubmit={onSubmit} className="space-y-6">
                    
                    <div className="space-y-2">
                        
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Nhập địa chỉ email
                        </label>
                        <input
                            {...register('email')}
                            type="email"
                            id="email"
                            placeholder="email@example.com"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>}
                       
                       
                        
                    </div>
                    <button
                        disabled={loading}
                        type="submit"
                        className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold"
                    >
                        Nhận mã
                    </button>
                    
                </form>
            </div>
        </div>
    );
};

export default UserForgotPassword;

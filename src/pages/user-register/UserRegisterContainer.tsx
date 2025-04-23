import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import * as request from '../../api/axiosClient';
import { PATH_URL } from '../../constants/pathUrl';
import handleApiErrors from '../../utils/handleApiErrors';
import { registerSchema } from './RegisterSchema';
import UserRegister from './UserRegister';
import { useForm } from 'react-hook-form';
import { UserRegisterContext } from '../../contexts/UserRegisterContext';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import isAuth from '../../constants/isAuth';
import { useTranslation } from 'react-i18next';

export interface registerFormInputs {
    userName: string;
    email: string;
    fullName: string;
    phoneNumber: string;
    password: string;
    comfirmPassword: string;
    role: string;
    gender: string;
    dob: string;
}

const UserRegisterContainer = () => {
    const navigate = useNavigate();
    const {t} = useTranslation("register");

    useEffect(() => {
        if (isAuth()) {
            navigate(PATH_URL.DASHBOARD_URL);
        }
      });

    const [loading, setLoading] = useState(false);
    
    const {
        register,
        control,
        formState: { errors },
        handleSubmit,
        setError,
    } = useForm<registerFormInputs>({
        resolver: yupResolver(registerSchema),
        mode: 'all',
    });

    const onSubmit = async (data: registerFormInputs)  => {
        setLoading(true);
        try {
            const response: any = await request.signUp(data);
            if (response.statusCode=400) {
                toast.dismiss();
                toast.success(response.message);
                navigate(PATH_URL.LOGIN_URL);
            }
        } catch (error: any) {
            toast.dismiss();
            if (error.response) {
                if (error.response.data.details) {
                    handleApiErrors<registerFormInputs>(error.response.data.details, setError);
                } else {
                    toast.error(error.response.data.message);
                }
            } else {
                toast.error('Đã có lỗi sảy ra vui lòng thử lại !');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <UserRegisterContext.Provider value={{ register, errors, control }}>
            <div className="flex justify-center container mx-auto font-medium py-10">
                <div className="bg-white dark:bg-gray-300 shadow-md rounded-lg py-6 px-8 ">
                    <div className="text-center mb-8 ">
                        <img src="./src/img/logo.png" alt="logo" className="w-48 inline-block" />
                        <h4 className="text-black mt-5 text-[22px]">{t('Heading')}</h4>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <UserRegister />
                        <div className="mt-8 flex justify-center">
                            <button
                                disabled={loading}
                                type="submit"
                                className="py-3 px-10 text-sm tracking-wider rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                            >
                                {t('register forms.Submit')}
                            </button>
                        </div>
                    </form>
                    <div className="text-center mt-5">
                    <p className=" mt-2 text-center text-gray-500 text-sm mb-2 block">
                                {t('swith prompt.Already have account')}
                                <button
                                    className="ml-2 text-blue-600 hover:underline "
                                    onClick={() => navigate(PATH_URL.LOGIN_URL)}
                                >
                                    {t('swith prompt.Sign in')}
                                </button>
                            </p>
                    </div>
                </div>
            </div>
        </UserRegisterContext.Provider>
    );
};
export default UserRegisterContainer;

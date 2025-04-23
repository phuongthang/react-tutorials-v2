import Login from './Login';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from './LoginSchema';
import * as request from '../../api/axiosClient';
import handleApiErrors from '../../utils/handleApiErrors';
import { useForm, FormProvider } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { PATH_URL } from '../../constants/pathUrl';
import { toast } from 'react-toastify';
import isAuth from '../../constants/isAuth';
import { useTranslation } from 'react-i18next';

export interface loginFormInputs {
    email: string;
    password: string;
}



const LoginContainer = () => {
    const navigate = useNavigate();
    const {t} = useTranslation('login')
    useEffect(() => {
       
        if (isAuth()) {
            navigate(PATH_URL.DASHBOARD_URL);
        }
      });

    const [loading, setLoading] = useState(false);
    
    const methods = useForm<loginFormInputs>({
        resolver: yupResolver(loginSchema),
        mode: 'all',
    });

    const { handleSubmit, setError } = methods;

    const onSubmit = async (data: loginFormInputs) => {
        setLoading(true);
        try {
            const response: any = await request.login(data);
            if (response.statusCode === 200) {
                const token = response.data.data.accessToken;
                localStorage.setItem('accessToken', token);
                toast.dismiss();
                toast.success(response.message);
                navigate(PATH_URL.DASHBOARD_URL);
            }
        } catch (error: any) {
            toast.dismiss();
            if (error.response) {
                if (error.response.data.details) {
                    handleApiErrors<loginFormInputs>(error.response.data.details, setError);
                } else {
                    toast.error(error.response.data.message);
                }
            } else {
                toast.error('Lỗi không xác định. thử lại sau!');
            }
        } finally {
            setLoading(false);
        }
    };
    return (
        <FormProvider {...methods}>
            <div className="flex justify-center container mx-auto font-medium p-6 ">
                <div className="bg-white dark:bg-gray-300 shadow-md rounded-lg px-8 py-6">
                    <div className="flex flex-col items-center justify-center gap-2 mb-8">
                        <img src="./src/img/logo.png" alt="logo" className="w-48 inline-block mb-4" />
                        <p className="m-0 text-[22px] font-medium ">
                            {t('Heading')}
                        </p>
                        <span className="m-0 font-light text-s max-w-[90%] text-center text-[#8B8E98]">
                            {t('Subheading')}
                        </span>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Login />
                        <button id="fpassword" className="mt-2 font-thin text-sm text-blue-500 mb-2 block hover:text-blue-600"
                            onClick={()=> navigate(PATH_URL.USER_FORGOT_PASSWORD_URL)}
                        >
                           {t('Forgot password')}
                        </button>
                        <div className="mt-5">
                            <button
                                disabled={loading}
                                type="submit"
                                className="py-3 w-full text-sm tracking-wider rounded-lg text-white bg-blue-700 hover:bg-blue-600 focus:outline-none"
                            >
                                {t('login forms.Submit')}
                            </button>
                        </div>
                        <div>
                            <p className="mt-2 text-center text-gray-500 text-sm mb-2 block">
                                {t('swith prompt.No account')}
                                <button
                                    className="ml-2 text-blue-600 hover:underline "
                                    onClick={() => navigate(PATH_URL.USER_REGISTER_URL)}
                                >
                                    {t('swith prompt.Sign up')}
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </FormProvider>
    );
};
export default LoginContainer;

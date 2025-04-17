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

interface LoginFormInputs {
    email: string;
    password: string;
}



const LoginContainer = () => {
    const navigate = useNavigate();


    useEffect(() => {
       
        if (isAuth()) {
            navigate(PATH_URL.DASHBOARD_URL);
        }
      });

    const [loading, setLoading] = useState(false);
    
    const methods = useForm<LoginFormInputs>({
        resolver: yupResolver(loginSchema),
        mode: 'all',
    });

    const { handleSubmit, setError } = methods;

    const onSubmit = async (data: LoginFormInputs) => {
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
                    handleApiErrors<LoginFormInputs>(error.response.data.details, setError);
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
                        <p className="m-0 text-[22px] font-medium ">Login to your Account</p>
                        <span className="m-0 font-light text-s max-w-[90%] text-center text-[#8B8E98]">
                            Get started with our app, just start section and enjoy experience.
                        </span>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Login />
                        <button id="fpassword" className="text-sm text-gray-600 mb-2 block hover:text-blue-500"
                            onClick={()=> navigate(PATH_URL.USER_FORGOT_PASSWORD_URL)}
                        >
                            Forgot your password?
                        </button>
                        <div className="mt-5">
                            <button
                                disabled={loading}
                                type="submit"
                                className="py-3 w-full text-sm tracking-wider rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                            >
                                {loading ? 'Loading...' : 'Login'}
                            </button>
                        </div>
                        <div>
                            <p className="text-center text-gray-600 text-sm mb-2 block">
                                Don&#x27;t have an account yet?&nbsp;
                                <button
                                    className="text-blue-600 hover:underline"
                                    onClick={() => navigate(PATH_URL.USER_REGISTER_URL)}
                                >
                                    Sign up
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

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

interface RegisterFormInputs {
    userName: string;
    email: string;
    fullName: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
    role: string;
    gender: string;
    dob: string;
}

const UserRegisterContainer = () => {
    const navigate = useNavigate();


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
    } = useForm<RegisterFormInputs>({
        resolver: yupResolver(registerSchema),
        mode: 'all',
    });

    const onSubmit = async (data: RegisterFormInputs) => {
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
                    handleApiErrors<RegisterFormInputs>(error.response.data.details, setError);
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
        <UserRegisterContext.Provider value={{ register, errors, control }}>
            <div className="flex justify-center container mx-auto font-medium py-10">
                <div className="bg-white dark:bg-gray-300 shadow-md rounded-lg py-6 px-8 ">
                    <div className="text-center mb-8 ">
                        <img src="./src/img/logo.png" alt="logo" className="w-48 inline-block" />
                        <h4 className="text-black mt-5 text-[22px]">Sign up into your account</h4>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <UserRegister />
                        <div className="mt-8 flex justify-center">
                            <button
                                disabled={loading}
                                type="submit"
                                className="py-3 px-10 text-sm tracking-wider rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                            >
                                {loading ? 'Loading...' : 'Sign up'}
                            </button>
                        </div>
                    </form>
                    <div className="text-center mt-5">
                        <button className="text-blue-600 hover:underline" onClick={() => navigate(PATH_URL.LOGIN_URL)}>
                            Already have an account?
                        </button>
                    </div>
                </div>
            </div>
        </UserRegisterContext.Provider>
    );
};
export default UserRegisterContainer;

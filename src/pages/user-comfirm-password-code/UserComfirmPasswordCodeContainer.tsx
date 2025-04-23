import UserComfirmPasswordCode from './UserComfirmPasswordCode';
import { useEffect, useState } from 'react';
import { comfirmCodeSchema } from './comfirmCodeSchema';
import isAuth from '../../constants/isAuth';
import { PATH_URL } from '../../constants/pathUrl';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as request from '../../api/axiosClient';
import { toast } from 'react-toastify';
import handleApiErrors from '../../utils/handleApiErrors';

export interface passwordCodeFormInputs {
    email?: string;
    passwordCode: string;
}
const UserComFirmPasswordCodeContainer = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const {
        control,
        formState: { errors },
        handleSubmit,
        setError,
    } = useForm<passwordCodeFormInputs>({
        resolver: yupResolver(comfirmCodeSchema),
        mode: 'all',
    });

    useEffect(() => {
        if (isAuth()) {
            navigate(PATH_URL.DASHBOARD_URL);
        }
    });

    const onSubmit = async (data: passwordCodeFormInputs) => {
 
        data.email = localStorage.getItem('emailForgotPassword') as string;
        setLoading(true);
        try {
            const response = await request.comfirmPasswordCode(data);
            if (response.statusCode === 200) {
                toast.dismiss();
                toast.success('Mật khẩu mới đã được gửi về địa chỉ email của bạn');
                localStorage.removeItem('emailForgotPassword');
                navigate(PATH_URL.LOGIN_URL);
            }
        } catch (error: any) {
            toast.dismiss();
            if (error.response) {
                if (error.response.data.details) {
                    handleApiErrors<passwordCodeFormInputs>(error.response.data.details, setError);
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
        <UserComfirmPasswordCode
            control={control}
            errors={errors}
            onSubmit={handleSubmit(onSubmit)}
            loading={loading}
        />
    );
};
export default UserComFirmPasswordCodeContainer;

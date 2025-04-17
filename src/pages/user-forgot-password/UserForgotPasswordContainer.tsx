import { useEffect, useState } from "react";
import UserForgotPassword, {ForgotPasswordFormInputs}  from "./UserForgotPassword";
import isAuth from "../../constants/isAuth";
import { PATH_URL } from "../../constants/pathUrl";
import { useNavigate } from "react-router-dom";
import {  useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotPasswordSchema } from "./forgotPasswordSchema";
import * as request from '../../api/axiosClient';
import { toast } from "react-toastify";
import handleApiErrors from "../../utils/handleApiErrors";



const UserForgotPasswordContainer = () =>
    {
        const navigate = useNavigate();
        const [loading, setLoading] = useState(false);

        const {
            register,
            formState: { errors },
            handleSubmit,
            setError,
        } = useForm<ForgotPasswordFormInputs>({
            resolver: yupResolver(forgotPasswordSchema),
            mode: 'all',
        });
    
        
    

        useEffect(() => {
       
            if (isAuth()) {
                navigate(PATH_URL.DASHBOARD_URL);
            }
          });

          const onSubmit = async (data:ForgotPasswordFormInputs)=>{
            setLoading(true)
            try{        
                const response = await request.forgotPassword(data);

                if (response.statusCode===200){
                    toast.dismiss();
                    toast.success("Đã gửi mã về email");
                    localStorage.setItem("emailForgotPassword",data.email);
                    navigate(PATH_URL.USER_COMFIRM_PASSWORD_CODE_URL);

                }
            } catch (error: any) {
                toast.dismiss();
                if (error.response) {
                    if (error.response.data.details) {
                        handleApiErrors<ForgotPasswordFormInputs>(error.response.data.details, setError);
                    } else {
                        toast.error(error.response.data.message);
                    }
                } else {
                    toast.error('Lỗi không xác định. thử lại sau!');
                }
            }
            finally{
                setLoading(false);
            }
            
        };

          
        return (
            
                <UserForgotPassword register={register}  errors={errors} onSubmit={handleSubmit(onSubmit)} loading={loading} />

        )
    }


export default UserForgotPasswordContainer;
import * as request from '../../api/axiosClient';
import UserDetail, { UserDetailFormData } from './UserDetail';
import { userDetailSchema } from './UserDetailSchema';

import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { Resolver, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { PATH_URL } from '../../constants/pathUrl';
import handleApiErrors from '../../utils/handleApiErrors';

const UserDetailContainer = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        control,
        setError,
        formState: { isDirty, errors },
    } = useForm<UserDetailFormData>
        ({
        resolver: yupResolver(userDetailSchema) as Resolver<UserDetailFormData>,
        mode: 'all',
    });


    const handleEditUser = async (data: UserDetailFormData) => {   
        data.id = id;
        try{        
            const response = await request.updateUser(data);
            if (response.statusCode===200){
                toast.dismiss();
                toast.success(response.message);
                navigate(PATH_URL.USER_LIST_URL);
            }
        } catch (error: any) {
            toast.dismiss();
            console.log(error);
            if (error.response) {
                if (error.response.data.details) {
                    handleApiErrors<UserDetailFormData>(error.response.data.details, setError);
                } else {
                    toast.error(error.response.data.message);
                }
            } else {
                toast.error('Lỗi không xác định. thử lại sau!');
            }
        }
        
    };

    const onCancel = () => {
        navigate(PATH_URL.USER_LIST_URL);
    }

    useEffect(() => {
        const fetchUser = async (data: { id: string }) => {
            setLoading(true);
            try {
                const response = await request.detailUser(data);
                if (response.data.code === 200) {
                    const user = response.data.data;
                    reset({
                        fullName: loading ? "loading..." : user.fullName,
                        userName: loading ? "loading..." : user.userName,
                        email: loading ? "loading..." : user.email,
                        dob: loading ? "loading..." : user.dob ? user.dob.split('T')[0] : '',
                        gender: loading ? "loading..." : user.gender,
                        phoneNumber: loading ? "loading..." : user.phoneNumber,
                        role: loading ? "loading..." : user.role,
                        file: undefined,
                    });
                } 
            } catch (error: any) {
                toast.dismiss();
                toast.error(error.response.data.message);
            }
            finally{
                setLoading(false);
            }
    
        };

        if (id) {
            fetchUser({ id });
        }
    }, [id, reset]);


    return (
        <div className="p-4">
            <UserDetail register={register} isDirty={isDirty} errors={errors} onSubmit={handleSubmit(handleEditUser)} control={control} onCancel={onCancel}/>
        </div>
    );
};

export default UserDetailContainer;

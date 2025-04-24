import * as request from '../../api/axiosClient';
import UserDetail from './UserDetail';
import { userDetailSchema } from './UserDetailSchema';

import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { Resolver, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { PATH_URL } from '../../constants/pathUrl';
import handleApiErrors from '../../utils/handleApiErrors';
import { useTranslation } from 'react-i18next';

export interface userDetailFormData {
    fullName: string;
    userName: string;
    email: string;
    dob: string;
    gender: string;
    phoneNumber: string;
    role: string;
    file?: File | null;
    id?: string;
}
const UserDetailContainer = () => {
    const navigate = useNavigate();
    const { t } = useTranslation('toastMessage');

    const { id } = useParams<{ id: string }>();

    const {
        register,
        handleSubmit,
        reset,
        control,
        setError,
        formState: { isDirty, errors },
    } = useForm<userDetailFormData>({
        resolver: yupResolver(userDetailSchema) as Resolver<userDetailFormData>,
        mode: 'all',
    });

    const handleEditUser = async (data: userDetailFormData) => {
        data.id = id;
        try {
            const response = await request.updateUser(data);
            if (response.statusCode === 200) {
                toast.dismiss();
                toast.success(response.message);
                navigate(PATH_URL.USER_LIST_URL);
            }
        } catch (error: any) {
            toast.dismiss();
            console.log(error);
            if (error.response) {
                if (error.response.data.details) {
                    handleApiErrors<userDetailFormData>(error.response.data.details, setError);
                } else {
                    toast.error(error.response.data.message);
                }
            } else {
                toast.error(t('errorsUnknown'));
            }
        }
    };

    const onCancel = () => {
        navigate(PATH_URL.USER_LIST_URL);
    };

    useEffect(() => {
        const fetchUser = async (data: { id: string }) => {
            try {
                const response = await request.detailUser(data);
                if (response.data.code === 200) {
                    const user = response.data.data;
                    reset({
                        fullName: user.fullName,
                        userName: user.userName,
                        email: user.email,
                        dob: user.dob.split('T')[0],
                        gender: user.gender,
                        phoneNumber: user.phoneNumber,
                        role: user.role,
                        file: undefined,
                    });
                }
            } catch (error: any) {
                toast.dismiss();
                toast.error(error.response.data.message);
            }
        };

        if (id) {
            fetchUser({ id });
        }
    }, [id, reset]);

    return (
        <div className="p-4">
            <UserDetail
                register={register}
                isDirty={isDirty}
                errors={errors}
                onSubmit={handleSubmit(handleEditUser)}
                control={control}
                onCancel={onCancel}
            />
        </div>
    );
};

export default UserDetailContainer;

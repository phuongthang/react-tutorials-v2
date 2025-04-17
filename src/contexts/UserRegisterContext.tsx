

import { createContext } from 'react';


import { Control, FieldErrors, UseFormHandleSubmit ,UseFormSetError,  UseFormRegister } from 'react-hook-form';





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

interface UserRegisterContext {
    register: UseFormRegister<RegisterFormInputs>;
    errors: FieldErrors<RegisterFormInputs>;
    control: Control<RegisterFormInputs>;
    setError?: UseFormSetError<RegisterFormInputs>;
    handleSubmit?:UseFormHandleSubmit<RegisterFormInputs>;
}

export const UserRegisterContext = createContext<UserRegisterContext | undefined>(undefined);
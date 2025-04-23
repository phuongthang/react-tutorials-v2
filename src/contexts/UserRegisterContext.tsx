import {registerFormInputs} from '../pages/user-register/UserRegisterContainer'

import { createContext } from 'react';

import { Control, FieldErrors, UseFormHandleSubmit ,UseFormSetError,  UseFormRegister } from 'react-hook-form';





interface UserRegisterContext {
    register: UseFormRegister<registerFormInputs>;
    errors: FieldErrors<registerFormInputs>;
    control: Control<registerFormInputs>;
    setError?: UseFormSetError<registerFormInputs>;
    handleSubmit?:UseFormHandleSubmit<registerFormInputs>;
}

export const UserRegisterContext = createContext<UserRegisterContext | undefined>(undefined);
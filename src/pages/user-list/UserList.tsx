import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import BadgeIcon from '@mui/icons-material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { userListFormInputs } from './UserListContainer';
import { useTranslation } from 'react-i18next';


interface UserlistProps {
    register: UseFormRegister<userListFormInputs>;
    errors: FieldErrors<userListFormInputs>;
    handleSubmit: UseFormHandleSubmit<userListFormInputs>;
    onSearch: (data: userListFormInputs) => void;
}

const UserList: React.FC<UserlistProps> = ({ 
    register,
    errors,
    handleSubmit,
    onSearch
}) => {
    const {t} = useTranslation('userList')

    return (
        <div className="bg-white shadow-lg rounded-xl p-6 w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-5 flex items-center justify-center">
                <SearchIcon className="mr-2 text-blue-600" />
                {t('heading')}
            </h2>

            <form onSubmit={handleSubmit(onSearch)}>
                <div className="flex flex-col md:flex-row md:justify-between items-start gap-4 w-full">
                    <div className="flex flex-col md:flex-row gap-3 md:w-3/5">
                        <div className="w-full md:w-1/3">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {t('userListForms.usernameLabel')}
                            </label>
                            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden hover:border-blue-500 transition-colors focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                                <div className="flex items-center justify-center bg-gray-50 p-2 border-r border-gray-300">
                                    <PersonIcon className="text-gray-500" fontSize="small" />
                                </div>
                                <input
                                    {...register('userName')}
                                    type="text"
                                    className="w-full px-3 py-2 focus:outline-none text-gray-700"
                                />
                            </div>
                            {errors.userName && <p className="text-red-600 text-xs mt-1">{errors.userName.message}</p>}
                        </div>

                        <div className="w-full md:w-1/3">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('userListForms.fullNameLabel')}
                            </label>
                            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden hover:border-blue-500 transition-colors focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                                <div className="flex items-center justify-center bg-gray-50 p-2 border-r border-gray-300">
                                    <BadgeIcon className="text-gray-500" fontSize="small" />
                                </div>
                                <input
                                    {...register('fullName')}
                                    type="text"
                                    className="w-full px-3 py-2 focus:outline-none text-gray-700"
                                />
                            </div>
                            {errors.fullName && <p className="text-red-600 text-xs mt-1">{errors.fullName.message}</p>}
                        </div>

                        <div className="w-full md:w-1/3">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('userListForms.accountRoleLabel')}
                            </label>
                            <select
                                {...register('role')}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                            >
                                <option value="">
                                {t('userListForms.accountRole.all')}
                                </option>
                                <option value="1">
                                {t('userListForms.accountRole.admin')}
                                </option>
                                <option value="2">
                                {t('userListForms.accountRole.user')}
                                </option>
                            </select>
                            {errors.role && <p className="text-red-600 text-xs mt-1">{errors.role.message}</p>}
                        </div>
                    </div>

                    <div className="self-end mt-4 md:mt-0">
                        <button 
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                        >
                            <SearchIcon className="mr-1" fontSize="small" />
                            {t('userListForms.button.search')}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserList;
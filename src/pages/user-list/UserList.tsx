import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import BadgeIcon from '@mui/icons-material/Badge';

interface FormInputs {
    userName: string;
    fullName: string;
    role: string;
}

interface UserlistProps {
    formInputs: FormInputs;
    handleChangeInputs: (name: keyof FormInputs, value: string) => void;
}

const UserList: React.FC<UserlistProps> = ({ formInputs, handleChangeInputs }) => {
    return (
        <div className="bg-white shadow-lg rounded-xl p-6 w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-5 text-center">Tìm kiếm người dùng</h2>

            <div className="flex flex-col md:flex-row items-start md:items-end gap-4 w-full">
                <div className="w-full md:w-1/3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tên đăng nhập</label>
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden hover:border-blue-500 transition-colors">
                        <div className="flex items-center justify-center bg-gray-50 p-2 border-r border-gray-300">
                            <PersonIcon className="text-gray-500" fontSize="small" />
                        </div>
                        <input
                            name="userName"
                            value={formInputs.userName}
                            onChange={(e) =>
                                handleChangeInputs(e.target.name as keyof FormInputs, e.target.value.trim())
                            }
                            type="text"
                            placeholder="Nhập tên đăng nhập"
                            className="w-full px-3 py-2 focus:outline-none text-gray-700"
                        />
                    </div>
                </div>

                <div className="w-full md:w-1/3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Họ tên</label>
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden hover:border-blue-500 transition-colors">
                        <div className="flex items-center justify-center bg-gray-50 p-2 border-r border-gray-300">
                            <BadgeIcon className="text-gray-500" fontSize="small" />
                        </div>
                        <input
                            type="text"
                            name="fullName"
                            value={formInputs.fullName}
                            onChange={(e) =>
                                handleChangeInputs(e.target.name as keyof FormInputs, e.target.value.trim())
                            }
                            placeholder="Nhập họ tên"
                            className="w-full px-3 py-2 focus:outline-none text-gray-700"
                        />
                    </div>
                </div>

                <div className="w-full md:w-1/3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Loại tài khoản</label>
                    <select
                        name="role"
                        value={formInputs.role}
                        onChange={(e) => handleChangeInputs(e.target.name as keyof FormInputs, e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    >
                        <option value="">Tất cả</option>
                        <option value="1">Quản trị viên</option>
                        <option value="2">Nhân viên</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default UserList;

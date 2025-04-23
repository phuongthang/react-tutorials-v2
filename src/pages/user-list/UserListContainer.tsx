import { ChangeEvent, useEffect, useState, Fragment } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import * as request from '../../api/axiosClient';
import UserTable from '../../components/UserTable';
import UserList from './UserList';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface listUsers {
    userName: string;
    fullName: string;
    dob: string;
    role: number;
    _id: string;
}

export interface userListFormInputs {
    userName: string;
    fullName: string;
    role: string;
}

interface params {
    page: number;
    limit: number;
    sortName: string;
    direction: string;
}

const UserListContainer = () => {
    const navigate = useNavigate();
    const { t } = useTranslation('userList');
    const defaultKey = (): userListFormInputs => {
        const stogareKey = localStorage.getItem('formInputs');
        if (stogareKey) {
            try {
                return JSON.parse(stogareKey);
            } catch {}
        }
        return {
            userName: '',
            fullName: '',
            role: '',
        };
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<userListFormInputs>({
        defaultValues: defaultKey(),
        mode: 'all',
    });

    const [listUsers, setListUsers] = useState<listUsers[]>([]);
    const [rowsPerPage, setRowsPerPage] = useState<number>(20);
    const [totalUser, setTotalUser] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [loading, setLoading] = useState(false);

    const [formInputs, setFormInputs] = useState(() => {
        const saved = localStorage.getItem('formInputs');
        return saved
            ? JSON.parse(saved)
            : {
                  userName: '',
                  fullName: '',
                  role: '',
              };
    });
    const [params, setParams] = useState(() => {
        const saved = localStorage.getItem('params');
        return saved
            ? JSON.parse(saved)
            : {
                  page: 1,
                  limit: 20,
                  sortName: 'userName',
                  direction: 'ASC',
              };
    });
    const callApiUserList = async (data: userListFormInputs, params: params) => {
        setLoading(true);
        try {
            const response: any = await request.userList(data, params);
            if (response.statusCode === 200 && response.data.data) {
                setListUsers(response.data.data.docs);
                setRowsPerPage(response.data.data.limit);
                setTotalUser(response.data.data.totalDocs);
                setCurrentPage(response.data.data.page);
            }
        } catch (error: any) {
            console.log(error);
            toast.dismiss();
            if (error.response) {
                if (error.response.data.message) {
                    toast.error(error.response.data.message);
                }
            } else {
                toast.error('Lỗi không xác định. thử lại sau!');
            }
        } finally {
            setLoading(false);
        }
    };
    const handleChangePage = (event: unknown, newPage: number) => {
        setParams((prevParams: params) => ({
            ...prevParams,
            page: newPage + 1,
        }));
    };

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        const newRowPerPage = parseInt(event.target.value, 10);
        setParams((prevParams: params) => ({
            ...prevParams,
            limit: newRowPerPage,
        }));
    };

    const handleSortChange = (column: string, order: 'asc' | 'desc') => {
        setParams((prevParams: params) => ({
            ...prevParams,
            sortName: column,
            direction: order.toUpperCase(),
        }));
    };

    const onEditUser = (id: string) => {
        navigate(`/admin/user-detail/${id}`);
    };

    const handleDeleteUser = async (idRemove: string, indexRemove: number) => {
        const data = { id: idRemove };
        const deleteUser = async () => {
            setLoading(true);
            try {
                toast.dismiss();
                const response: any = await request.deleteUser(data);
                if (response.statusCode === 200) {
                    const newListUser = listUsers.filter((_, index) => index !== indexRemove);
                    setListUsers(newListUser);
                    setTotalUser(totalUser - 1);
                    toast.success('Đã xóa người dùng');
                }
            } catch (error: any) {
                toast.dismiss();
                if (error.response) {
                    if (error.response.data.message) {
                        toast.error(error.response.data.message);
                    }
                } else {
                    toast.error('Lỗi không xác định. thử lại sau!');
                }
            } finally {
                setLoading(false);
            }
        };

        confirmAlert({
            title: t('Alert.Title'),
            message: t('Alert.Delete message'),
            buttons: [
                {
                    label: t('Alert.Comfirm'),
                    onClick: () => {
                        deleteUser();
                    },
                },
                {
                    label: t('Alert.Cancel'),
                    onClick: () => {},
                },
            ],
        });
    };

    useEffect(() => {
        callApiUserList(formInputs, params);
        localStorage.setItem('formInputs', JSON.stringify(formInputs));
        localStorage.setItem('params', JSON.stringify(params));
    }, [formInputs, params]);

    const onSearch = (data: userListFormInputs) => {
        setParams((prevParams: params) => ({
            ...prevParams,
            page: 1,
        }));
        setFormInputs(data);
    };

    return (
        <div>
            <UserList register={register} errors={errors} handleSubmit={handleSubmit} onSearch={onSearch} />
            <div className="shadow rounded-lg overflow-hidden">
                <UserTable
                    data={listUsers}
                    rowsPerPage={rowsPerPage}
                    currentPage={Math.max(currentPage - 1, 0)}
                    totalUser={totalUser}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    onSortChange={handleSortChange}
                    onEditUser={onEditUser}
                    onDeleteUser={handleDeleteUser}
                    loading={loading}
                />
            </div>
        </div>
    );
};

export default UserListContainer;

import React, { JSX, useState } from 'react';
import { PersonOutline, AdminPanelSettings, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { format, parseISO } from 'date-fns';
import isAdmin from '../constants/isAdmin';

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TablePagination,
    Box,
    Typography,
    TableSortLabel,
    Avatar,
    Chip,
} from '@mui/material';

interface UserTableProps {
    data: User[];
    header: string[];
    rowsPerPage: number;
    currentPage: number;
    totalUser: number;
    loading: boolean;
    onPageChange: (event: unknown, newPage: number) => void;
    onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSortChange: (column: string, direction: 'asc' | 'desc') => void;
    onEditUser: (id: string) => void;
    onDeleteUser: (id: string, rowIndex: number) => void;
}

interface User {
    _id: string;
    userName: string;
    fullName: string;
    dob: string;
    role: number;
}

type Order = 'asc' | 'desc';
type SortableColumn = 'userName' | 'fullName';

const roleMapping: Record<number, string> = {
    1: 'Admin',
    2: 'User',
};

const roleColors: Record<number, { bg: string; color: string; icon: JSX.Element }> = {
    1: { bg: '#fef0f0', color: '#d32f2f', icon: <AdminPanelSettings fontSize="small" /> },
    2: { bg: '#edf7ed', color: '#2e7d32', icon: <PersonOutline fontSize="small" /> },
};

const getInitials = (name: string): string => {
    return name
        .split(' ')
        .map((part) => part.charAt(0))
        .join('')
        .toUpperCase()
        .substring(0, 2);
};

const generateAvatarColor = (name: string): string => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash % 360);
    return `hsl(${hue}, 70%, 60%)`;
};

const UserTable: React.FC<UserTableProps> = ({
    data,
    header,
    rowsPerPage,
    currentPage,
    totalUser,
    loading,
    onPageChange,
    onRowsPerPageChange,
    onSortChange,
    onEditUser,
    onDeleteUser,
}) => {
    const [orderBy, setOrderBy] = useState<SortableColumn>('userName');
    const [order, setOrder] = useState<Order>('asc');
    const handleRequestSort = (property: SortableColumn): void => {
        const isAsc = orderBy === property && order === 'asc';
        const newOrder = isAsc ? 'desc' : 'asc';
        setOrder(newOrder);
        setOrderBy(property);
        onSortChange(property, newOrder);
    };

    return (
        <Paper
            sx={{
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                overflow: 'hidden',
            }}
            elevation={0}
        >
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#f9f9f9' }}>
                            <TableCell sx={{ fontWeight: 'bold', width: '5%' }}>Stt</TableCell>
                            <TableCell
                                sortDirection={orderBy === 'userName' ? order : false}
                                sx={{ fontWeight: 'bold', width: '20%' }}
                            >
                                <TableSortLabel
                                    active={orderBy === 'userName'}
                                    direction={orderBy === 'userName' ? order : 'asc'}
                                    onClick={() => handleRequestSort('userName')}
                                >
                                    {header[0]}
                                </TableSortLabel>
                            </TableCell>

                            <TableCell
                                sortDirection={orderBy === 'fullName' ? order : false}
                                sx={{ fontWeight: 'bold', width: '25%' }}
                            >
                                <TableSortLabel
                                    active={orderBy === 'fullName'}
                                    direction={orderBy === 'fullName' ? order : 'asc'}
                                    onClick={() => handleRequestSort('fullName')}
                                >
                                    {header[1]}
                                </TableSortLabel>
                            </TableCell>

                            <TableCell sx={{ fontWeight: 'bold', width: '15%' }}>{header[2]}</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', width: '15%' }}>{header[3]}</TableCell>
                            {isAdmin() && <TableCell sx={{ fontWeight: 'bold', width: '15%' }}>{header[4]}</TableCell>}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={6} align="center" sx={{ py: 3 }}>
                                    <Typography variant="body1" color="text.secondary">
                                        Loading...
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ) : data.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={6} align="center" sx={{ py: 3 }}>
                                    <Typography variant="body1" color="text.secondary">
                                        Không tìm thấy dữ liệu
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ) : (
                            data.map((row, rowIndex) => {
                                const avatarColor = generateAvatarColor(row.fullName);
                                const roleInfo = roleColors[row.role] || {
                                    bg: '#f5f5f5',
                                    color: '#757575',
                                    icon: <PersonOutline fontSize="small" />,
                                };

                                return (
                                    <TableRow
                                        key={row._id || rowIndex}
                                        sx={{
                                            '&:hover': { backgroundColor: '#f5f9ff' },
                                            transition: 'background-color 0.2s',
                                        }}
                                    >
                                        <TableCell>{currentPage * rowsPerPage + rowIndex + 1}</TableCell>

                                        <TableCell>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Avatar
                                                    sx={{
                                                        width: 32,
                                                        height: 32,
                                                        bgcolor: avatarColor,
                                                        fontSize: '0.8rem',
                                                        marginRight: 1.5,
                                                    }}
                                                >
                                                    {getInitials(row.fullName)}
                                                </Avatar>
                                                <Typography variant="body2">{row.userName}</Typography>
                                            </Box>
                                        </TableCell>

                                        <TableCell>
                                            <Typography variant="body2">{row.fullName}</Typography>
                                        </TableCell>

                                        <TableCell>
                                            <Typography variant="body2">
                                                {format(parseISO(row.dob), 'dd/MM/yyyy')}
                                            </Typography>
                                        </TableCell>

                                        <TableCell>
                                            <Chip
                                                icon={roleInfo.icon}
                                                label={roleMapping[row.role] || 'Unknown'}
                                                size="small"
                                                sx={{
                                                    backgroundColor: roleInfo.bg,
                                                    color: roleInfo.color,
                                                    fontWeight: 500,
                                                    '& .MuiChip-icon': { color: roleInfo.color },
                                                }}
                                            />
                                        </TableCell>

                                        {isAdmin() && (
                                            <TableCell>
                                                <Box>
                                                    <EditIcon
                                                        onClick={() => onEditUser(row._id)}
                                                        sx={{ cursor: 'pointer', mr: 1 }}
                                                    />
                                                    <DeleteIcon
                                                        onClick={() => onDeleteUser(row._id, rowIndex)}
                                                        sx={{ cursor: 'pointer', mr: 1 }}
                                                    />
                                                </Box>
                                            </TableCell>
                                        )}
                                    </TableRow>
                                );
                            })
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                component="div"
                count={totalUser}
                page={currentPage}
                onPageChange={onPageChange}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[20, 50, 100]}
                onRowsPerPageChange={onRowsPerPageChange}
                labelRowsPerPage="Số dòng:"
            />
        </Paper>
    );
};

export default UserTable;

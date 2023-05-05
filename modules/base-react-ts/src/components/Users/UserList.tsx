import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from 'components/shared/Link';
import React from 'react';
import { User } from 'types/components/User';
import { formatDate, formatDateTime } from 'utilities/date';
import { Gender } from '../../types/components/User';

const UserList: React.FC<{ users: User[] | undefined }> = ({ users }: { users: User[] | undefined }): JSX.Element => {
  users = users != null ? users : [];

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Date Created</TableCell>
            <TableCell align="right">Last Updated</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => {
            return (
              <TableRow
                key={user.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                >
                  {user.name}
                </TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.gender != null ? Gender[user.gender] : ''}</TableCell>
                <TableCell align="right">{formatDate(user.createdAt)}</TableCell>
                <TableCell align="right">{formatDateTime(user.updatedAt)}</TableCell>
                <TableCell>
                  <Link href={`edit/${user.id}`}>Edit</Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserList;

import { Link } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import { IUser } from 'types/components/users';
import { formatDate, formatDateTime } from 'utilities/date';
import { GENDER } from '../../types/components/users';

const UserList: React.FC<{ userMap: any; userIds: number[] }> = ({
  userMap,
  userIds,
}: {
  userMap: IUser[];
  userIds: number[];
}): JSX.Element => {
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
          {userIds?.map(userId => {
            const user = userMap[userId];
            return (
              <TableRow
                key={userId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                >
                  {user.name}
                </TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.gender != null ? GENDER[user.gender] : ''}</TableCell>
                <TableCell align="right">{formatDate(user.createdAt)}</TableCell>
                <TableCell align="right">{formatDateTime(user.updatedAt)}</TableCell>
                <TableCell>
                  <Link href={`edit/${userId != null ? userId : ''}`}>Edit</Link>
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

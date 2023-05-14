import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Gender, User } from 'types/user';
import { formatDate, formatDateTime } from 'utilities/date';

const UserList: React.FC<{ users?: User[]; handleDelete?: any }> = ({
  users = [],
  handleDelete,
}: {
  users?: User[] | undefined;
  handleDelete?: any;
}): JSX.Element => {
  const hasDelete = useMemo(() => handleDelete != null, [handleDelete]);
  const noUsersColspan = hasDelete ? 7 : 6;

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
            <TableCell />
            {hasDelete && <TableCell />}
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
                  <Link to={`edit/${user.id}`}>
                    <IconButton aria-label="edit user">
                      <Edit color="primary" />
                    </IconButton>
                  </Link>
                </TableCell>
                {hasDelete && (
                  <TableCell>
                    <IconButton
                      aria-label="delete user"
                      onClick={() => handleDelete(user.id)}
                    >
                      <Delete color="warning" />
                    </IconButton>
                  </TableCell>
                )}
              </TableRow>
            );
          })}
          {users.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={noUsersColspan}
                align="center"
              >
                <p>
                  <strong>NO USERS</strong>
                </p>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserList;

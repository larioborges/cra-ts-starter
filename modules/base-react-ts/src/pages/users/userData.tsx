import { GENDER, IUser } from 'types/components/users';

export const users: IUser[] = [
  {
    id: 1,
    name: 'Larry Berton',
    email: 'larry@berton.com',
    gender: GENDER.FEMALE,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: 'Herb Mallock',
    email: 'herb@mallock.com',
    gender: GENDER.FEMALE,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: '',
    email: 'a@b.com',
    gender: GENDER.FEMALE,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const userMap = users.reduce(
  (userMap: any, user: IUser, _) =>
    user.id != null
      ? {
          ...userMap,
          [user.id]: user,
        }
      : userMap,
  {},
);

export const userIds = Object.keys(userMap);

export default userMap;

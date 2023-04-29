import { Gender, User } from 'types/components/User';

export const users: User[] = [
  {
    id: 1,
    name: 'Larry Berton',
    email: 'larry@berton.com',
    gender: Gender.FEMALE,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: 'Herb Mallock',
    email: 'herb@mallock.com',
    gender: Gender.OTHER,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: '',
    email: 'a@b.com',
    gender: Gender.MALE,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const userMap = users.reduce(
  (userMap: any, user: User, _) =>
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

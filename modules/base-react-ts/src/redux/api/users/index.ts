import { User } from 'types/user';
import { api } from '../api';

type UsersResponse = User[];

const USER_TAG = 'User';
const USER_LIST_TAG = { type: USER_TAG, id: 'LIST' };

const userApi = api.injectEndpoints({
  endpoints: build => ({
    getUsers: build.query<UsersResponse, void | never>({
      query: () => 'users',
      providesTags: (result: any) =>
        result !== undefined && result.length > 0
          ? [...result.map(({ id }: User) => ({ type: USER_TAG, id })), USER_LIST_TAG]
          : [USER_LIST_TAG],
      forceRefetch: () => true,
    }),
    getUser: build.query<User, string>({
      query: id => `users/${id}`,
      providesTags: (result, error, id): any => [{ type: USER_TAG, id }],
      forceRefetch: () => true,
    }),
    addUser: build.mutation<User, Partial<User>>({
      query: body => ({
        url: `users`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [USER_LIST_TAG] as any,
    }),
    updateUser: build.mutation<void | never, Pick<User, 'id'> & Partial<User>>({
      query: ({ id, ...patch }) => ({
        url: `users/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          userApi.util.updateQueryData('getUser', id.toString(), (draft: User) => {
            Object.assign(draft, patch);
          }),
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: (result, error, { id }): any => [{ type: USER_TAG, id }],
    }),
    deleteUser: build.mutation<number, number>({
      query: id => {
        return {
          url: `users/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (result, error, id): any => [{ type: USER_TAG, id }],
    }),
  }),
  overrideExisting: false,
});

export const { useGetUsersQuery, useAddUserMutation, useGetUserQuery, useUpdateUserMutation, useDeleteUserMutation } =
  userApi;

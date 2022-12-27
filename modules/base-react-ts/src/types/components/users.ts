export enum GENDER {
  FEMALE,
  MALE,
  OTHER,
}

export interface IUser {
  id?: number;
  name?: string;
  email?: string;
  gender?: GENDER;
  createdAt?: Date;
  updatedAt?: Date;
}

export enum GENDER {
  Female,
  Male,
  Other,
}

export interface IUser {
  id?: number;
  name?: string;
  email?: string;
  gender?: GENDER;
  createdAt?: Date;
  updatedAt?: Date;
}

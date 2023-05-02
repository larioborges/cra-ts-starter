export enum Gender {
  FEMALE,
  MALE,
  OTHER,
}

export interface User {
  id: number;
  name?: string;
  email?: string;
  age?: number;
  gender?: Gender;
  createdAt?: Date;
  updatedAt?: Date;
}

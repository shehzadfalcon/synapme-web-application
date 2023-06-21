import { Dayjs } from 'dayjs';

export interface UserData {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  active: boolean;
  verified: boolean;
  roles: string[];
  id: string;
  __v?: number;
}

export interface RegisterValues {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: string | undefined;
  gender: 'male' | 'female';
  receiveEmailNotifications: boolean;
}

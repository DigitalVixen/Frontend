export interface IUser {
  username: string;
  password: string;
  double_password: string;
  email: string;
  first_name: string;
  last_name: string;
  middle_name?: string;
  is_staff: boolean;
}

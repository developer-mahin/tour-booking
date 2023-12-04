interface IUser {
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  age: number;
  email: string;
  phone: string;
  photo: string;
  userRole?: 'user' | 'admin';
  userStatus?: 'active' | 'inactive';
}

export default IUser;

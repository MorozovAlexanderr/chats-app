export type User = {
  _id: string;
  email: string;
  name: string;
};

export type UserAuthResponse = {
  data: {
    user: User;
    token: string;
  };
};

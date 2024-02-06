export type AuthUser = {
  id: string;
  email: string;
  name: string;
};

export type UserResponse = {
  data: {
    user: AuthUser;
    token: string;
  };
};

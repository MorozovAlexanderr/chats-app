export type Room = {
  _id: string;
  title: string;
  members: { id: string; name: string; email: string }[];
};

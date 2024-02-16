export type Room = {
  _id: string;
  title: string;
  members: RoomMember[];
};

export type RoomMember = {
  id: string;
  name: string;
  email: string;
};

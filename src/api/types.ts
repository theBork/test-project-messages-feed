export interface Message {
  id: string;
  date: string;
  text: string;
  authorId: string;
  authorNick: string;
}

export type NewMessage = Omit<Message, "id">;

export interface AuthorInfo {
  id: string;
  nick: string;
  firstName: string;
  lastName: string;
  description: string;
}

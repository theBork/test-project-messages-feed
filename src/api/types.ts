export interface Message {
  id: string;
  date: string;
  text: string;
  author: string;
}

export type NewMessage = Omit<Message, "id">;

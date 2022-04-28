import { mockWaitForApiResponse } from "api/utils";
import formatISO from "date-fns/formatISO";
import { Message } from "api/types";
import authorsMock from "../../mocks/authors.json";
import { createRandomId } from "../../../utils";

const addMessage = (text: string) => {
  const unknownAuthor = authorsMock.find(x => x.id === "unknown-author");
  if (!unknownAuthor) return Promise.reject();

  const newMessage = {
    id: createRandomId([]),
    date: formatISO(new Date()),
    text,
    authorId: unknownAuthor.id,
    authorNick: unknownAuthor.nick,
  };

  return mockWaitForApiResponse<Message>(newMessage, "fast");
};

export default addMessage;

import { mockWaitForApiResponse } from "api/utils";
import { Message } from "api/types";
import messagesMock from "../../mocks/allMessages.json";

const getMessagesByAuthorId = (authorId: string) => mockWaitForApiResponse<Message[]>(messagesMock.filter(x => x.authorId === authorId), "middle");

export default getMessagesByAuthorId;

import { mockWaitForApiResponse } from "api/utils";
import { Message } from "api/types";
import mockedData from "../../mocks/allMessages.json";

const getAllMessages = () => mockWaitForApiResponse<Message[]>(mockedData, "slow");

export default getAllMessages;

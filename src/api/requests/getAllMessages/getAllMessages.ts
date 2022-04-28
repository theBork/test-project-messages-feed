import { mockWaitForApiResponse } from "api/utils";
import { Message } from "api/types";
import mockedData from "./mock.json";

const getAllMessages = () => mockWaitForApiResponse<Message[]>(mockedData, "slow");

export default getAllMessages;

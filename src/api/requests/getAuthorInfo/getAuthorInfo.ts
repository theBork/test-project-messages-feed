import { mockWaitForApiResponse } from "api/utils";
import { AuthorInfo } from "api/types";
import authorsMock from "../../mocks/authors.json";

const getAuthorInfo = (authorId: string) => {
  const authorInfo = authorsMock.find(x => x.id === authorId);
  if (!authorInfo) return Promise.reject();
  return mockWaitForApiResponse<AuthorInfo>(authorInfo, "fast");
};

export default getAuthorInfo;

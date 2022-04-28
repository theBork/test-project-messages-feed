import { getRandomNumber } from "../../../utils";

const apiSpeedVariants = {
  fast: {
    from: 100,
    to: 300,
  },
  middle: {
    from: 300,
    to: 500,
  },
  slow: {
    from: 500,
    to: 1000,
  },
};

type ApiSpeed = keyof typeof apiSpeedVariants;

function mockWaitForApiResponse<T extends unknown = unknown>(response: T, apiSpeed?: ApiSpeed): Promise<T> {
  const currSpeedNamespace = apiSpeedVariants[apiSpeed || "fast"];
  const currSpeedMs = getRandomNumber(currSpeedNamespace.from, currSpeedNamespace.to);
  return new Promise((resolve) => {
    setTimeout(() => resolve(response), currSpeedMs);
  });
}

export { mockWaitForApiResponse };

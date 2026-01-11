/** @format */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error("VITE_API_BASE_URL is not defined in environment variables");
}

export class ApiError extends Error {
  statusCode?: number;
  endpoint?: string;

  constructor(message: string, statusCode?: number, endpoint?: string) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
    this.endpoint = endpoint;
  }
}

export const handleApiResponse = async <T>(
  response: Response,
  endpoint: string
): Promise<T> => {
  if (!response.ok) {
    throw new ApiError(
      `Failed to fetch from ${endpoint}`,
      response.status,
      endpoint
    );
  }

  return await response.json();
};

export const apiRequest = async <T>(
  url: string,
  options?: RequestInit
): Promise<T> => {
  try {
    const response = await fetch(url, options);
    return await handleApiResponse<T>(response, url);
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(
      `Network error: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      undefined,
      url
    );
  }
};

export { API_BASE_URL };

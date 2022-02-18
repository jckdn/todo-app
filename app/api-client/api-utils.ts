export const baseUrl = process.env.API_URL;

export async function request<ResponseType>(
  resource: RequestInfo,
  init?: RequestInit,
) {
  try {
    const response = await fetch(resource, init);

    return await handleResponse<ResponseType>(response);
  } catch (error) {
    handleError(error);
  }
}

async function handleResponse<ResponseType>(
  response: Response,
): Promise<ResponseType> {
  if (response.ok) {
    return response.json();
  }

  if (response.status === 400) {
    // Add the validation failure explanation from server to the error message.
    const error = await response.text();

    throw new Error(error);
  }

  throw new Error('Network response was not OK.');
}

function handleError(error: Error) {
  console.error('API call failed. ' + error);

  throw error;
}

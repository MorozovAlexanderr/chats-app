import { AxiosError } from 'axios';

export const getErrorMessage = (error: unknown) => {
  let message;

  if (error instanceof AxiosError) {
    message = error.response?.data.message;
  } else if (error instanceof Error) {
    message = error.message;
  } else {
    message = 'Something went wrong';
  }

  return message;
};